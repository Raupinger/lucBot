const Discord = require('discord.js');
const client = new Discord.Client();
const {token, channelID} = require('./config.json');
var channel = null

module.exports = {

conect: function(){
        
        client.login(token);
    return client;
    },
    
send: function(content){
    channel.send(content);
}
}

client.on('ready', () => {
          console.log('Ready!');
          console.log(client.channels.get(channelID));
          
          console.log("1");
          //we mustn't do any of this before we are ready. Otherwise it were undefined
          channel = client.channels.get(channelID);
          });
//just for testng
client.on("message", message => {
          
          if (message.content == "Test") {
          message.channel.send("dest");
          
          }
          });

