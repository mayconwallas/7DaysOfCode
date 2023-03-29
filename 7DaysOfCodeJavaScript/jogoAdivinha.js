const acertaAqui = Math.floor(Math.random() * (10) + 1);
let chute;
console.log(acertaAqui);
console.log(chute);

for (let tentativa = 0; 3 > tentativa; tentativa++) {
    let chute = prompt("Qual o numero vc acha que é ?");
    if (acertaAqui == chute) {
        alert('Você acertou!! parabéns!!');
        break;
    } else if (tentativa == 2) {
        alert(`acabaram suas chances, o numero era ${acertaAqui}`);
        break;
    } else {
        alert('Tenta mais uma vez mane.');
        continue;
    } 
}