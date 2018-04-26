const pubSubHubbub = require("pubsubhubbub");
const{port, YTID, host} = require('./config.json');
var pubSubSubscriber = pubSubHubbub.createServer({ callbackUrl: host + ":" + port});
console.log(pubSubSubscriber);
topic = "https://www.youtube.com/xml/feeds/videos.xml?channel_id=" + YTID,
hub = "https://pubsubhubbub.appspot.com";

pubSubSubscriber.listen(port);

pubSubSubscriber.on("subscribe", function(data){
          console.log("Subscribe");
          console.log(data);
          
          console.log("Subscribed "+topic+" to "+hub);
          });

pubSubSubscriber.on("error", function(error){
          console.log("Error");
          console.log(error);
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
          });
