

const fs = require('fs');
const colors = require('colors');

const crearTabla = async (base = 5, listar = false, h = 10) => {
  let salida = '';
  let consola = '';
  try {
    for (let i = 1; i <= h; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${colors.brightWhite(base)} ${'x'.green} ${colors.brightWhite(i)} ${'='.green} ${colors.brightWhite(base * i)}\n`;
    }

    if (listar) {
      console.log('======================='.green);
      console.log('   Tabla del:'.magenta, colors.blue(base));
      console.log('======================='.green);

      console.log(consola);
    }


    fs.writeFileSync(`./out/tabla-${base}.txt`, salida);

    return `Tabla del ${base}`;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  crearTabla,
}