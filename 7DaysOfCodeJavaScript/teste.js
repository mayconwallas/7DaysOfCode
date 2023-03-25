/*Inicio programa*/
var resposta = 1;
while (resposta == 1 ) {
let res = document.querySelector(".escreveTela")
const novoNome = prompt("Qual seu nome? ");

/*variavesi usadas mais abaixo*/
const jogar = `Olá ${novoNome} o que vc vai estudar?[1] para "Front-End" e [2] para "Back-End"`;
const frontend = 'Qual frameWorks você quer aprender ?[1] para "React", [2] para "Angular" ou [3] para "Vue.js"';
const backend = 'Qual frameWorks você quer aprender ?[1] para "C#", [2] para "Java" ou [3] para "Node.js"';
const vaiContinuar = 'Você quer estudar mais? [1] para Sim e [2] para Não'


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
  resposta = conversaPorprompt(vaiContinuar);
}
  
