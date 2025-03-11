//exporta a função index, deixando disponível para ser usada em outras partes do projeto
module.exports.index = function(application, req, res){
//cria uma instancia de modulo news que será usado para acessar os dados da noticia
var newsModel = new application.src.models.news();

//chamar o metodo getlastnews do modulo news modelo para buscar as ultimas noticias, esse proximo metodo recebe a função de callback que será após a consulta ser concluída
newsModel.getLastNews(function (err, result){
    //se a consutla der certo, o result terá as noticias recuperadas do 'banco de dados', o metodo res.render é utilizado para renderizar a views - news/index e passa as noticias obtidas nos results para a view, onde será exibida para o usuário 
    res.render("news/index", {news: result});
});

}