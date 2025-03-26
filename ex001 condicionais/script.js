let nome = prompt("Olá piloto, qual é o seu nome?");
let velocity = 0;
let newVelocity = prompt("Olá " + nome + ", a velocidade inicial da sua nave é de " + velocity + " km/s, qual velocidade gostaria de acelerar a nave?");
let confirmVelocity = confirm("Você confirma a velocidade de " + newVelocity + " km/s?");

(confirmVelocity) ? alert("Velocidade confirmada com sucesso, você está a " + newVelocity + " km/s") : alert("Cancelar decolagem, velocidade não confirmada");

if (newVelocity <= 0) {
    alert("Nave parada, impossível decolar");
} else if (newVelocity < 40) {
    alert("Você está devagar, podemos aumentar mais");
} else if (newVelocity >= 40 && newVelocity < 80) {
    alert("Parece uma boa velocidade para manter");
} else if (newVelocity >= 80 && newVelocity < 100) {
    alert("Velocidade alta, considere diminuir");
} else if (newVelocity >= 100) {
    alert("Velocidade perigosa, controle automático forçado");
}
