// server.js
// where your node app starts

// init project
/*const http = require('http');
const express = require('express');
const app = express();
const {CommandoClient} = require('discord.js-commando');
const path = require('path');
const client = new CommandoClient({
  commandPrefix: '<',
  owner: '293865523198951424',
  invite: 'https://discord.gg/sSC36rZ',
});
client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['first', 'First Command Group'],
    ['second', 'Second Command Group'],
  ])
  .registerDefaultGroups()
  .registerDefaultCommands({
    help: true,
  })
  .registerCommandsIn(path.join(__dirname, 'commands'));


  client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
    client.user.setActivity('with Commando');
  });

  client.on('error', console.error);


  client.login(process.env.SECRET);
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html

// listen for requests :)
*/