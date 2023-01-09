

const fs = require('fs');


const crearArchivo = async (multiplo = 5, listar, hasta = 10) => {

    if (listar) {
        console.log('=========================='.red);
        console.log(`Tabla del ${multiplo}`);
        console.log('=========================='.random);
    }

    let salida = '';

    for (let i = 1; i <= hasta; i++) {
        salida += (`${multiplo} x ${i} = ${multiplo * i}\n`);
    }

    (listar) ? console.log(salida.rainbow) : 'se creo perro';


    fs.writeFileSync(`./salida/tabla-${multiplo}.txt`, salida);

    return `tabla-${multiplo}.txt creada`;

}

module.exports = {
    crearArchivo
}