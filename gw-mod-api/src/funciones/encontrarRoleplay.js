/**
 * @description hjqwej 
 * @param {String} texto Texto a leer (todos los mensajes).
 */
function rpwalltext(texto){


    if(texto.length > 1024) return true; 
    else return false;


}

module.exports = rpwalltext;