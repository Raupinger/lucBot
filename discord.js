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
    console.log(channel);
    channel.send(content);
}
}

client.on('ready', () => {
          console.log('Ready!');
          
          
          
          //we mustn't do any of this before we are ready. Otherwise it were undefined
          channel = client.channels.get(channelID);
          console.log(channel);
          console.log("1");
          });
//just for testng
client.on("message", message => {
          
          if (message.content == "Test") {
          message.channel.send("dest");
          
          }
          });

