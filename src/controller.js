const _ = require('lodash')
const config  = require('../config')
const v4 = require("uuid").v4
const langdetect = require('langdetect')
const FastText = require('fasttext.js');
const path = require("path")




let Queue = require("queue-promise")
const queue = new Queue({
  concurrent: 1,
  interval: 2
});
 
queue.on("start", () => console.log(`Queue started at ${new Date()}`));
queue.on("stop", () => console.log(`Queue stoped at ${new Date()}`));
queue.on("resolve", data => console.log("task:", data, " resolved"));
queue.on("reject", error => console.error(error));

let fasttextCommand = config.service.fasttextCommand
let dim = config.service.dim 
let availableLocales = config.service.lang.split(",").map( l => l.trim())

let ft = {}

let methodMaps = {
	"print-word-vectors": {
		load:"loadPWV",
		query:"printWordVectors",
		options: {
			printWordVectors:{
				normalize: true
			}
		}	
	 },
	 "print-sentence-vectors": {
		load:"loadPSV",
		query:"printSentenceVectors",
		options: {
			printSentenceVectors:{
					normalize: true
			}
		}	
	 }
}


let task = (query, resp) => () => new Promise((resolve,reject) => {
	
	console.log(`query`, query)

	let locale = (query.locale) ? query.locale : langdetect.detectOne(query.text)

	if(availableLocales.includes(locale) && ft[locale]){
		ft[locale][methodMaps[fasttextCommand].query](query.text)
			.then( res => {
				resp.send({
					service:config.service.name,
					command: fasttextCommand,
					locale,
					query,
					response:{
						data:res,
						status:"success"
					}	
				})
				resolve(res)
			})
	} else {
		resp.send({
			service:config.service.name,
			command: fasttextCommand,
			locale,
			query,
			response:{
				message:"locale is not supported",
				status:"error"
			}	
		})
		reject(locale)
	}
})


let routes = [
	{
		method: "get",
		path: "/",
		handler: (req, res) => {
			res.send(config)
		}
	},

	{
		method: "get",
		path: "/version",
		handler: (req, res) => {
			res.send(config)
		}
	},

	{
		method: "post",
		path: "/version",
		handler: (req, res) => {
			res.send(config)
		}
	},

	{
		method: "post",
		path: "/query",
		handler: (req, res) => {
			queue.enqueue(task(
			  	req.body, 
			  	res
			))
		}
	}
]



let initialize = () => Promise.reduce(
	availableLocales,
	(res, locale) => {
		let loadModel= path.resolve(config.service.fasttext.models[locale][`dim${dim}`]) 
		let options = _.extend({loadModel}, methodMaps[fasttextCommand].options)
		
		ft[locale] = new FastText(options);
		
		console.log(`Load model ${JSON.stringify(options, null," ")} by ${methodMaps[fasttextCommand].load} method`)

		return ft[locale][methodMaps[fasttextCommand].load]().then( () => {
			res++
			return res 
		})
	},
	0
).then(() => routes)


module.exports = {
	initialize
}
