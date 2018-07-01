var request = require('request');
var cheerio = require('cheerio');


request('http://www.feevale.br/graduacao/ciencia-da-computacao/estrutura-curricular', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    // Carrega o site
    $ = cheerio.load(html);

    $('div').each(function (i, element) {
      var atual = $(this);
      console.log()
    });
  }
