// Importa o módulo 'express', que é um framework web para o node.js
var express = require('express');

//importa o módulo consign que é usado para autoload(autocarregamento) de scripts, facilitando o gerencimaneto de rotas, models e controllers

var consign = require ('consign');

//criar uma instancia do express
var app = express();

//configura a engine de visualização como 'ejs' para renderizar arquivos .ejs
app.set('view engine', 'ejs');

//define o diretório onde estão localizados as views (template ejs)
app.set('views', './src/views');

//configura o "consign" para incluir automaticamente as rotas, models e controllers na aplicação
consign()
    .include('src/routes')//inclui as rotas, carregando os arquivos da pasta 'src/routes'
    .then('src/models') //inclui os models, carregando os arquivos da parta 'src/models'
    .then('src/controllers')//inclui os controllers, carregando os arquivos da pasta 'src/controllers'
    .into(app); //injeta essas dependências na instância do express(app)
        