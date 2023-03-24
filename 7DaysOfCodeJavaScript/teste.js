const jogar = 'Qual linha de estudo você quer seguir?[1] para "Front-End" e [2] para "Back-End"';
const frontend = 'Qual frameWorks você quer aprender ?[1] para "React", [2] para "Angular" ou [3] para "Vue.js"';
const backend = 'Qual frameWorks você quer aprender ?[1] para "C#", [2] para "Java" ou [3] para "Node.js"';


const novoNome = prompt("Qual seu nome? ");
const simOuNao = prompt(`Olá ${novoNome} vamos jogar o jogo do aprendizado? Digite [1] para "Sim" e [2] para "Não"`);


function conversaPorprompt(mensagem) {
    let interacao = prompt(mensagem);
    return interacao;
}

function vaiJogarOuNao(interacao) {
    if (interacao == 1 || interacao == "Sim" || interacao == "sim") {
      let interacao = conversaPorprompt(jogar);
      return interacao;
    } else if (interacao == 2 || interacao == "Não" || interacao == "não") {
        alert("Ok, quando estiver com tempo retorne.")
    } else {
        alert("você não digitou uma resposta valida.")
    }      
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

  

  let resCaminho = vaiJogarOuNao(simOuNao);
  let aprendendo = caminho(resCaminho);