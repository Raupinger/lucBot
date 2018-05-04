const util = require('util');
const Discord = require('discord.js');
const client = new Discord.Client();
const {token, channelID} = require('./config.json');
var channel = null
const pubSubHubbub = require("pubsubhubbub");
const{port, YTID, host} = require('./config.json');
var pubSubSubscriber = pubSubHubbub.createServer({ callbackUrl: host + ":" + port});
console.log(pubSubSubscriber);
topic = "https://www.youtube.com/xml/feeds/videos.xml?channel_id=" + YTID,
hub = "https://pubsubhubbub.appspot.com";
var parseString = require('xml2js').parseString;

pubSubSubscriber.listen(port);

client.login(token);

client.on('ready', () => {
          console.log('Ready!');
          
          
          
          //we mustn't do any of this before we are ready. Otherwise it were undefined
          channel = client.channels.get(channelID);
          console.log(channel);
          console.log("1");
          });

pubSubSubscriber.on("listen", function(){
                    console.log("Server listening on port %s", pubSubSubscriber.port);
                    pubSubSubscriber.subscribe(topic, hub, function(err){
                                               if(err){
                                               console.log("Failed subscribing" + err);
                                               }
                                               });
                    });

pubSubSubscriber.on("feed", function(data){
                    console.log(data)
                    console.log(data.feed.toString());
                    var xml = data.feed.toString();
                    parseString(xml, function (err, result) {
                                console.log(util.inspect(result.feed, false, null));
                                
                                });
                    channel.send(data.feed.toString());
                    });


