/**
 * @description hjqwej 
 * @param {String} texto Texto a leer (todos los mensajes).
 */
function walltext(texto){


    if(texto.length > 512) return true; 
    else return false;


}

module.exports = walltext;