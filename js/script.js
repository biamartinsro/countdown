import Countdown from "./countdown.js";

const tempoParaENEM = new Countdown("17 January 2021 13:00:00 GMT-0300")
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = tempoParaENEM.total[index];
        
    });
}

setInterval(mostrarTempo, 1000);







    
