const argv = require('yargs')
    .option('m', {
        alias: 'multiplo',
        type: 'number',
        demandOption: true,
        describe: 'Es el múltiplo de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true
    })
    .check((argv, options) => {
        if (isNaN(argv.m)) {
            throw 'El múltimo tiene que ser un número';
        }
        return true;
    })



module.exports = argv;