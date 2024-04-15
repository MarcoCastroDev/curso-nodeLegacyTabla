

const { crearTabla } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

// console.log(argv);

crearTabla(argv.b, argv.l, argv.h)
  .then(salida => console.log(`${salida} creada`.rainbow))
  .catch(err => console.log(err));