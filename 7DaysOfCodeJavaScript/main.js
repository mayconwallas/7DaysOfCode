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
    // const novoNome = prompt("Qual seu nome? ");
    // const simOuNao = prompt(`Olá ${novoNome} vamos jogar o jogo do aprendizado? Digite [1] para "Sim" e [2] para "Não"`);
    
    // function vaiJogarOuNao(interacao) {
    //     if (interacao == 1 || interacao == "Sim" || interacao == "sim") {
    //       let interacao = prompt('Qual linha de estudo você quer seguir?[1] para "Front-End" e [2] para "Back-End"');
    //       return interacao;
    //     } else if (interacao == 2 || interacao == "Não" || interacao == "não") {
    //       alert("Ok, quando estiver com tempo retorne.");
    //     } else {
    //       alert("você não digitou uma resposta valida.")
    //     }      
    //   }
      
      
    //   function caminho(resCaminho) {
    //     if (resCaminho == 1 || resCaminho == "Front-End" || resCaminho == "frontend") {
    //       let frameWorks = prompt('Qual frameWorks você quer aprender ?[1] para "React", [2] para "Angular" ou [3] para "Vue.js"');
    //       return frameWorks;
    //     } else if (resCaminho == 2 || resCaminho == "Back-End" || resCaminho == "backend") {
    //       let frameWorks = prompt('Qual frameWorks você quer aprender ?[1] para "C#", [2] para "Java" ou [3] para "Node.js"');
    //     return frameWorks;
    //     } else {
    //       alert("você não digitou uma resposta valida.")
    //     }      
    //   }

    //   let resCaminho = vaiJogarOuNao(simOuNao);
    //   let aprendendo = caminho(resCaminho);


    /*versão 0.1*/

//     const jogar = 'Qual linha de estudo você quer seguir?[1] para "Front-End" e [2] para "Back-End"';
// const frontend = 'Qual frameWorks você quer aprender ?[1] para "React", [2] para "Angular" ou [3] para "Vue.js"';
// const backend = 'Qual frameWorks você quer aprender ?[1] para "C#", [2] para "Java" ou [3] para "Node.js"';


// const novoNome = prompt("Qual seu nome? ");
// const simOuNao = prompt(`Olá ${novoNome} vamos jogar o jogo do aprendizado? Digite [1] para "Sim" e [2] para "Não"`);


// function conversaPorprompt(mensagem) {
//     let interacao = prompt(mensagem);
//     return interacao;
// }

// function vaiJogarOuNao(interacao) {
//     if (interacao == 1 || interacao == "Sim" || interacao == "sim") {
//       let interacao = conversaPorprompt(jogar);
//       return interacao;
//     } else if (interacao == 2 || interacao == "Não" || interacao == "não") {
//         alert("Ok, quando estiver com tempo retorne.")
//     } else {
//         alert("você não digitou uma resposta valida.")
//     }      
//   }
  
  
//   function caminho(resCaminho) {
//     if (resCaminho == 1 || resCaminho == "Front-End" || resCaminho == "frontend") {
//       let frameWorks = conversaPorprompt(frontend);
//       return frameWorks;
//     } else if (resCaminho == 2 || resCaminho == "Back-End" || resCaminho == "backend") {
//       let frameWorks = conversaPorprompt(backend);
//     return frameWorks;
//     } else {
//       alert("você não digitou uma resposta valida.")
//     }      
//   }

  

//   let resCaminho = vaiJogarOuNao(simOuNao);
//   let aprendendo = caminho(resCaminho);


/*versão 0.2 */
/*Inicio programa*/
let res = document.querySelector(".escreveTela")
const novoNome = prompt("Qual seu nome? ");

/*variavesi usadas mais abaixo*/
const jogar = `Olá ${novoNome} o que vc vai estudar?[1] para "Front-End" e [2] para "Back-End"`;
const frontend = 'Qual frameWorks você quer aprender ?[1] para "React", [2] para "Angular" ou [3] para "Vue.js"';
const backend = 'Qual frameWorks você quer aprender ?[1] para "C#", [2] para "Java" ou [3] para "Node.js"';


function conversaPorprompt(mensagem) {
    let interacao = prompt(mensagem);
    return interacao;
}

function vaiJogarOuNao() {
  let interacao = conversaPorprompt(jogar);
  return interacao; 
  }

  function oqueEstuda(interacao) {
    if (interacao == 1 ){
      let estudando = "Front-End"
      return estudando
    }
    let estudando = "Back-End"
      return estudando
  }
  
  
  function caminho(resCaminho) {
    if (resCaminho == 1 || resCaminho == "Front-End" || resCaminho == "frontend") {
      let frameWorks = conversaPorprompt(frontend);
      return frameWorks;
    } else if (resCaminho == 2 || resCaminho == "Back-End" || resCaminho == "backend") {
      let frameWorks = conversaPorprompt(backend);
    return frameWorks;
    } else {
      alert("você não digitou uma resposta valida.")
    }      
  }

  function queLinhaEstuda(interacao) {
    if (interacao == 1 ){
      let estudando = "React"
      return estudando
    } else if (interacao == 2){
      let estudando = "Angular"
        return estudando
    }
    let estudando = "Vue.js"
        return estudando
  }

  function queLinhaEstuda2(interacao) {
    if (interacao == 1 ){
      let estudando = "C#"
      return estudando
    } else if (interacao == 2){
      let estudando = "JAVA"
        return estudando
    }
    let estudando = "Node.js"
        return estudando
  }

  function escolha(backOuFront) {
    if (backOuFront == "Front-End") {
      let linhaDeEstudo = queLinhaEstuda(aprendendo)
      return linhaDeEstudo;
    } 
    if(backOuFront == "Back-End") {
      let linhaDeEstudo2 = queLinhaEstuda2(aprendendo);
      return linhaDeEstudo2;
    }
  }

  

  let resCaminho = vaiJogarOuNao();
  let estudando = oqueEstuda(resCaminho);
  let aprendendo = caminho(resCaminho);
  let LinhaEscolha = escolha(estudando);
  res.innerHTML = `Parabéns ${novoNome} você escolheou o caminho do ${estudando} e estudo tudo de ${LinhaEscolha}.`