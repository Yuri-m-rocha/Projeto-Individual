var quizModel = require("../models/quizModel"); 

function inserir(req, res) {
    var Usuario = req.body.UsuarioServer
    var QtdAcertos = req.body.TotalAcertosServer;

    if (Usuario == undefined) {
        res.status(400).send("Seu Usuario está undefined!");
    }
    else if (QtdAcertos == undefined) {
        res.status(400).send("Seu QtdAcertos está undefined!");
    }

    quizModel.inserir(Usuario, QtdAcertos)
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

module.exports = {
    inserir: inserir  
}