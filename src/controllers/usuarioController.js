var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        res.status(203).json(resultadoAutenticar[0]);
                    } 
                    
                    else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    }
                    
                    else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var dtNasc = req.body.dtNascServer;
    var genero = req.body.generoServer;
    
    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (genero == undefined) {
            res.status(400).send("Seu genero está undefined!");
    } else if (dtNasc == undefined) {
    res.status(400).send("Sua data está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, dtNasc, genero)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function idadepublico (req,res){
    usuarioModel.buscaridadepublica()
    .then(
        function(resultado){
            res.status(200).json(resultado);
        }
    )
    .catch(
        function(erro){
            console.log(erro);
            console.log(
                "\nHouve um erro ao buscar idade publica! erro:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage)
        }
    )
}

function generopublico(req, res){

    usuarioModel.buscargeneropublico()
    .then (
        function(resultado){
            res.status(200).json(resultado);
        }
    ) .catch(
        function(erro){
            console.log(erro);
            console.log(
                "\nHouve um erro ao buscar genero! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
            )
}


module.exports = {
    autenticar,
    cadastrar,
    idadepublico,
    generopublico
}