const _ = require('lodash')
const chalk = require('chalk')
const unzip = require('./unzip')
const download = require('./download')
const fs = require('fs').promises
const fse = require('fs-extra')
const path = require('path')
const os = require('os')
const Promise = require("bluebird")

let config = _.extend(require('../config'), require('./build.config'));

console.log(`JACE-FAST SERVICE POSTINSTALL IN ${config.service.mode} MODE`)

let languages = config.service.lang.split(",").map( l => l.trim())

Promise.reduce(
	languages,
	(res, lang) => {
		
		console.log(`Install FASTTEXT model for ${config.models.source[lang].name} language`)

		let tempDirectory = ''

		fs.mkdtemp(path.join(os.tmpdir(), 'FT-'))

			.then( dir => {
				console.log(`Create temp directory ${dir}`)
				tempDirectory = dir
				return dir
			})

			.then( tempDir => {
				if(config.models.source[lang][`dim${config.service.dim}`].url){
					console.log(`Download ${config.models.source[lang][`dim${config.service.dim}`].url.join("\n")}`);
					return download(
						config.models.source[lang][`dim${config.service.dim}`].url, 
						tempDir, 
						config.models.source[lang][`dim${config.service.dim}`].dest
					)
				}

				if(config.models.source[lang].file) 
					return new Promise( resolve => { resolve(config.models.source[lang].file)})

			})

			.then( filePath => {
				console.log(`Create model directory ${config.models.destDir}`)
				return fse.mkdirs(config.models.destDir).then( () => filePath )
			})

			.then( filePath => {
				console.log(`Extract model into ${config.models.destDir}`);
				return unzip(filePath, config.models.destDir)
			})

			.then( () => {
				console.log(`Remove temp ${tempDirectory}`)
				fse.remove(tempDirectory)
			})

			.then( () => {
				console.log(chalk.green(`FASTTEXT Model for ${config.models.source[lang].name} language is installed into ${config.models.destDir}`))
			})

	},
	0
)
.catch( e => {
	console.log(chalk.red(e.toString()))
});

