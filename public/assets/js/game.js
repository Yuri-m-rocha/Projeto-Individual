

const respostasQuiz = {
    questao1: 'a',
    questao2: 'b',
    questao3: 'c',
    questao4: 'a',
    questao5: 'b',
    questao6: 'c',
    questao7: 'b',
    questao8: 'a',
    questao9: 'a',
    questao10: 'c',
    questao11: 'c',
    questao12: 'a',
    questao13: 'a',
    questao14: 'a'
}

function finalizarQuiz() {
    const qtdQuestoes = 14;

    let respCertas = 0;

    let Usuario = sessionStorage.ID_USUARIO

    for (numQuestao = 1; numQuestao <= qtdQuestoes; numQuestao++) {
        const nomeTag = `questao${numQuestao}`;
        const respostas = document.getElementsByName(nomeTag);
        let resposta = '';

        for (alternativa = 0; alternativa < respostas.length; alternativa++) {
            
            if (respostas[alternativa].checked) {
                
                resposta = respostas[alternativa].value;
                if (respostasQuiz[nomeTag] === resposta) {
                    respCertas++;
                }
                break;
            }
        }

        if (resposta === '') {
            alert("É necessário responder todas as perguntas para finalizar o quiz")
            respCertas = -1;
            return;
        }
    } 

    if (respCertas !== -1) {
        let mensagem = "Mais sorte na próxima vez :/";
        if (respCertas >= 5 && respCertas <= 10) {
            mensagem = "Quase lá! É bom assistir mais algumas vezes para melhorar";
        } else if (respCertas > 10 && respCertas <= 13) {
            mensagem = "Parabéns! voce conhece muito de Naruto!";
        } else if (respCertas === 14) {
            mensagem = "Uau! voce é o maior fã de Naruto!";
        }

        let porcentagem = (respCertas / qtdQuestoes) * 100;
        alert(`Voce acertou ${respCertas} de 14 (${porcentagem.toFixed(2)}%). ${mensagem}`);
        setTimeout(function () {
            
            window.location = "game.html";

        }, 2000);


    }

    fetch("/quiz/inserir", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            TotalAcertosServer: respCertas,
            UsuarioServer: Usuario
        }),
    })
}

    // const respostasQuiz = {
    //     questao1: 'a',
    //     questao2: 'b',
    //     questao3: 'c',
    //     questao4: 'a',
    //     questao5: 'b',
    //     questao6: 'c',
    //     questao7: 'b',
    //     questao8: 'a',
    //     questao9: 'a',
    //     questao10: 'c',
    //     questao11: 'c',
    //     questao12: 'a',
    //     questao13: 'a',
    //     questao14: 'a'
    // }

    // function finalizarQuiz() {
    //     const qtdQuestoes = 14;
    //     let respCertas = 0;
    //     let Usuario = sessionStorage.ID_USUARIO

    //     for (numQuestao = 1; numQuestao <= qtdQuestoes; numQuestao++) {
    //         const nomeTag = `questao${numQuestao}`;
    //         const respostas = document.getElementsByName(nomeTag);
    //         let resposta = '';

    //         for (alternativa = 0; alternativa < respostas.length; alternativa++) {
    //             if (respostas[alternativa].checked) {
    //                 resposta = respostas[alternativa].value;
    //                 if (respostasQuiz[nomeTag] === resposta) {
    //                     respCertas++;
    //                 }
    //                 break;
    //             }
    //         }

    //         if (resposta === '') {
    //             alert("É necessário responder todas as perguntas para finalizar o quiz")
    //             respCertas = -1;
    //             return;
    //         }
    //     }

    //     if (respCertas !== -1) {
    //         let mensagem = "Mais sorte na próxima vez :/";
    //         if (respCertas >= 5 && respCertas <= 10) {
    //             mensagem = "Quase lá! É bom assistir mais algumas vezes para melhorar";
    //         } else if (respCertas > 10 && respCertas <= 13) {
    //             mensagem = "Parabéns! voce conhece muito de Naruto!";
    //         } else if (respCertas === 14) {
    //             mensagem = "Uau! voce é o maior fã de Naruto!";
    //         }

    //         let porcentagem = (respCertas / qtdQuestoes) * 100;
    //         alert(`Voce acertou ${respCertas} de 14 (${porcentagem.toFixed(2)}%). ${mensagem}`);
    //         // setTimeout(function () {
    //         //     window.location = "charts.html";
    //         // }, 2000);

    //         fetch("/quiz/cadastrar", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 TotalAcertosServer: respCertas,
    //                 UsuarioServer: Usuario
    //             }),
    //         })
    //             .then(function (resposta) {
    //                 console.log("resposta: ", resposta);

    //                 if (resposta.ok) {
    //                     console.log = ("FUNFOUUUUUUU");

    //                 } else {
    //                     throw "Houve um erro ao tentar realizar o cadastro!";
    //                 }
    //             })
    //     }


    // }