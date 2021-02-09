const path = require("path")

module.exports = {
	models: {

		destDir: path.resolve( __dirname, '../model'),
		
		source:{
			en: {
				
				name: "English",
				dim10:{
					
					// model:"./model/cc_en_10.bin",

					dest: "cc.en.10.bin.zip",
					url: [
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/en/10/cc.en.10.bin.zip.sf-part1",
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/en/10/cc.en.10.bin.zip.sf-part2",
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/en/10/cc.en.10.bin.zip.sf-part3"
					]
				},
				
				dim25:{
					
					// model:"./model/cc_en_25.bin",

					dest: "cc.en.25.bin.zip",
					url: [
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/en/25/cc.en.25.bin.zip.sf-part1",
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/en/25/cc.en.25.bin.zip.sf-part2",
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/en/25/cc.en.25.bin.zip.sf-part3",
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/en/25/cc.en.25.bin.zip.sf-part4",
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/en/25/cc.en.25.bin.zip.sf-part5"
					]
				}
			},

			uk: {
				
				name: "Ukrainian",
				
				dim10:{
					
					// model:"./model/cc_uk_10.bin",

					dest: "cc.uk.10.bin.zip",
					url: [
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/uk/10/cc.uk.10.bin.zip.sf-part1",
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/uk/10/cc.uk.10.bin.zip.sf-part2",
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/uk/10/cc.uk.10.bin.zip.sf-part3"
					]
				},
				
				dim25:{
					
					// model:"./model/cc_uk_25.bin",

					dest: "cc.uk.25.bin.zip",
					url: [
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/uk/25/cc.uk.25.bin.zip.sf-part1",
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/uk/25/cc.uk.25.bin.zip.sf-part2",
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/uk/25/cc.uk.25.bin.zip.sf-part3",
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/uk/25/cc.uk.25.bin.zip.sf-part4",
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/uk/25/cc.uk.25.bin.zip.sf-part5"
					]
				}
			},

			ru: {
				
				name: "Russian",
				
				dim10:{
					
					// model:"./model/cc_ru_10.bin",

					dest: "cc.ru.10.bin.zip",
					url: [
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/ru/10/cc.ru.10.bin.zip.sf-part1",
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/ru/10/cc.ru.10.bin.zip.sf-part2",
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/ru/10/cc.ru.10.bin.zip.sf-part3"
					]
				},
				
				dim25:{
					
					// model:"./model/cc_ru_25.bin",

					dest: "cc.ru.25.bin.zip",
					url: [
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/ru/25/cc.ru.25.bin.zip.sf-part1",
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/ru/25/cc.ru.25.bin.zip.sf-part2",
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/ru/25/cc.ru.25.bin.zip.sf-part3",
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/ru/25/cc.ru.25.bin.zip.sf-part4",
						"https://raw.githubusercontent.com/boldak/fasttext-models/master/ru/25/cc.ru.25.bin.zip.sf-part5"
					]
				}
			}
		}
	}
}
