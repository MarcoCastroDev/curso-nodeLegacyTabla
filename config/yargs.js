

const argv = require('yargs')
  .options('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base to the multiplication'
  })
  .options('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: false,
    default: false,
    describe: 'List the multiplication table'
  })
  .options('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Base to the multiplication'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error('La base tiene que ser un número');
    }
    return true
  })
  .argv;

module.exports = argv;