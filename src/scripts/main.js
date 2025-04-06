AOS.init();

const dataEvento = new Date("Dec 12, 2025 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoEvento = timeStampEvento - timeStampAtual;

    const diasMs = 1000 * 60 * 60 * 24;
    const horasMs = 1000 * 60 * 60;
    const minutosMs = 1000 * 60

    const diasEvento = Math.floor(tempoEvento / diasMs);
    const horasEvento = Math.floor((tempoEvento % diasMs) / horasMs);
    const minutosEvento = Math.floor(tempoEvento % horasMs / minutosMs);
    const segundosEvento = Math.floor((tempoEvento % minutosMs) / 1000)

    document.getElementById('contador').innerHTML = `começa em ${diasEvento}d ${horasEvento}h ${minutosEvento}m ${segundosEvento}s`

    if (tempoEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'já acabou!<br>Fique ligado nas próximas novidades!'
    }

},1000);