/* eslint-env jquery */
/* eslint no-global-assign: "off" */

var request = require('request')
var cheerio = require('cheerio')

request('http://portal.esocial.gov.br/institucional/documentacao-tecnica', function (error, response, html) {
  if (!error && response.statusCode === 200) {
    // Carrega o site
    $ = cheerio.load(html)
    console.log($('#content-core').html())
  }
})
