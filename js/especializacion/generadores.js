// Funciones generadoras ( asterisco al lado de la funcion y cedimos datos con yield)

// ycada vez que la funcion llega al sifguiente yield se paausa y luego paea volver a inicarla hasta el siguente yield utilizamos next ()

function* extractNumbers(attemps) {
  for (let i = 0; i < attemps; i++) {
    yield Math.floor(Math.random() * 91);
  }
}

let cpu = 0;
let player = 0;

// Tiradas cpu

let cpuGenerator = extractNumbers(2);
cpu += cpuGenerator.next().value;
cpu += cpuGenerator.next().value;

let playerGenerator = extractNumbers(2);
player += playerGenerator.next().value;
player += playerGenerator.next().value;

console.log(
  cpu > player ? `Cpu win: ${cpu} vs ${player}` : `Player win:  ${cpu} vs ${player}`
);
