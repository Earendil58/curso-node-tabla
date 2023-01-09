
const { crearArchivo } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');









crearArchivo(argv.m, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err));





