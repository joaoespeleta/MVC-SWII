//exporta uma função que recebe o objeto 'application' como parametro, essa função configura uma rota na aplicação
module.exports = function(application){

    //define uma rota HTTP-GET para a raiz 
    application.get('/', function(req, res){
        //quando a rota raiz '/' é acessada, chama o metodo 'index' do controller 'news'. Passa 'application', 'req' (requisição) e 'res' (resposta) para o metodo 'index'
        application.src.controllers.new.index(application,req,res)
    });
}