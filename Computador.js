//classe de abstração
function Computador (processador, placaDeVideo, ram, memoria) {
    this.processador = processador;
    this.placaDeVideo = placaDeVideo;
    this.ram = ram;
    this.memoria = memoria;
}

//classe de herança
const computadorDoGuilherme = {
    processador: 'Ryzen 5 5500',
    placaDeVideo: 'Rx 6600',
    ram: '16gb',
    memoria: '500 gb',
}

const computadorDaMaria = {
    processador: 'Ryzen 7 5800',
    placaDeVideo: 'Rtx 3090',
    ram: '32gb',
    memoria: '2 tb',
}

//objetos de instância
const computadorDoGuilherme2 = new Computador("Ryzen 5 5500","Rx 6600", "16gb", "500 gb" );
const computadorDaMaria2 = new Computador("Ryzen 7 5800","Rtx 3090", "32gb", "2 tb" );
const notbookDoGuilherme = new Computador("Intel 5 11th", "mx 330", "8gb", "256gb");

console.log(computadorDoGuilherme2);
console.log(computadorDaMaria2);
console.log(notbookDoGuilherme);