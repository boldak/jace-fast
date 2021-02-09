
module.exports = {

	service:{
		name: process.env.SERVICE_NAME || "jace-fast",
		lang: process.env.FASTTEXT_LANG || "uk, en, ru",
		dim: process.env.FASTTEXT_DIM || 25,
		fasttextCommand: process.env.FASTTEXT_COMMAND || "print-sentence-vectors",
		mode: process.env.NODE_ENV || "development",
		port: process.env.PORT || 8181,
		host: process.env.HOST || "localhost",

		fasttext:{
			
			models:{
				
				en:{
					dim10:"./model/cc.en.10.bin",
					dim25:"./model/cc.en.25.bin"
				},
				
				uk:{
					dim10:"./model/cc.uk.10.bin",
					dim25:"./model/cc.uk.25.bin"
				},
				
				ru:{
					dim10:"./model/cc.ru.10.bin",
					dim25:"./model/cc.ru.25.bin"
				}

			}	
		}
	}

}
