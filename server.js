const bodyParser = require('body-parser')
const CORS = require('cors')
const express = require('express')
const config  = require('./config')

const app = express();
app.use(CORS());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// require("./src/javascript/routes").forEach( route => {
// 	app[route.method](route.path, route.handler)
// })
let controller = require("./src/controller") 

controller.initialize()
	.then( routes => {
		routes.forEach( route => {
			app[route.method](route.path, route.handler)
		})
		app.listen(config.service.port, () => {
	  	console.log(`JACE-FAST SERVICE for ${config.service.lang} languages starts on port ${config.service.port} in ${config.service.mode} mode.`);
		});
	})
