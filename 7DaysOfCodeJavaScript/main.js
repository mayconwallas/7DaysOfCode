/*Exercicio do primeiro dia*/
/*
let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

if (numeroUm == stringUm) {
    console.log("As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes.");
} else {
    console.log('As variáveis numeroUm e stringUm não tem o mesmo valor');
}

if (numeroTrinta === stringTrinta) {
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
  } else {
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
  }

  if (numeroDez == stringDez) {
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
  } else {
    console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
  }
    */
  /*Exercicio do segundo dia*/
  /*
  const nome = prompt("Olá, primeiramente qual o seu nome?");
  const  idade = prompt(`É um prazer ${nome} vamos continuar, quantos anos você tem?`);
  const aprendendoLinguagem = prompt(`${nome}, vou te fazer mais uma pergunta, Qual linguagem de programação você está estutando? `);
  var apresentacao = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${aprendendoLinguagem}!`

  const res = document.querySelector(".escreveTela");
  res.innerHTML = apresentacao;

  const resposta = prompt(`Você gosta de estudar ${aprendendoLinguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

    if (resposta == 1) {
        res.innerHTML = apresentacao + " Muito bom! Continue estudando e você terá muito sucesso.";
    } 
    if (resposta == 2) {
        res.innerHTML = apresentacao + " Ahh que pena... Já tentou aprender outras linguagens?";
        
    } 
      */

    /*Exercicio do terceiro dia*/
    let resCaminho;
    const novoNome = prompt("Qual seu nome? ");
    const interacao = prompt(`Olá ${novoNome} vamos jogar o jogo do aprendizado? Digite [1] para "Sim" e [2] para "Não"`);
    
    


      function vaiJogarOuNao(interacao) {
        if (interacao == 1 || interacao == "Sim" || interacao == "sim") {
          let interacao = prompt('Qual linha de estudo você quer seguir?[1] para "Front-End" e [2] para "Back-End"');
          return interacao;
        } else if (interacao == 2 || interacao == "Não" || interacao == "não") {
          alert("Ok, quando estiver com tempo retorne.");
        } else {
          alert("você não digitou uma resposta valida.")
        }      
      }
      
      vaiJogarOuNao(interacao);
      console.log(interacao);
      console.log(resCaminho);