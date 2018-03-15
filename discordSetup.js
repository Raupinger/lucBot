const Discord = require('discord.js');
const client = new Discord.Client();
const {token} = require('./config.json');

module.exports = {

conect: function(){
        
        client.login(token);
    }
}

client.on('ready', () => {
          console.log('Ready!');
          });
/*
client.login(token);
*/
