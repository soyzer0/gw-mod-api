// const db = require("quick.db");

let wldb = /discord.com|discordapp.com|discord.gg|discord.store|discordmerch.com|discordstatus.com|spotify.com|garticphone.com|supercell.com|minecraft.net|discord.app|clashroyale.com|arcane.bot|carl.gg|matheo.es|tenor.com|tenor.org|giphy.com|google.com|translate.goog|poto.is|zer0.cyou|gatitos.world|roblox.com|outlook.com|bing.com|bing.es|microsoft.com|/gi; // db.fetch(`whitelist`);

function whitelist(texto){

        let whitelisted = wldb;

        if(whitelisted.test(texto)) return true; 
        else return false; 

}


module.exports = whitelist;
/**
 * @description Comprueba si el texto introducido se encuentra en la whitelist.
 * @param {String} texto El texto introducido. 
 */