const express = require("express");
const http = require("http");
const mineflayer = require('mineflayer')

const app = express();

app.use(express.json());

app.get("/", (_, res) => res.sendFile(__dirname + "/index.html"));
app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.repl.co/`);
}, 224000);

function createBot () {
const bot = mineflayer.createBot({
  host: 'game2.falix.cc', // SERVER IP
  username: 'Arceus', // BOT NAME
  port: 39903, // SERVER PORT
});

  //  CONFIGURACIÓN DE MODS, COMENTAR ESTE TROZO SI NO SE TIENE MODS EN EL SERVIDOR
  // Se crea una entrada de "modid,version" por cada mod en el servidor
var forgeHandshake = require('minecraft-protocol-forge').forgeHandshake;
  forgeHandshake(bot._client, { forgeMods:[
        {modid: 'treechopper', version: '1.2.4'},
    {modid: 'pixelmon', version: '8.3.8'},
    {modid: 'carryon', version: '1.12.3'},
    {modid: 'tombstone', version: '4.5.3'},
    {modid: 'cosmeticarmorreworked', version: '1.12.2-v5a'},
    {modid: 'customnpcs', version: '1.12'},
    {modid: 'elevatorid', version: '1.3.14'},
    {modid: 'cfm', version: '6.3.1'},
    {modid: 'pixelmon_clothes', version: '1.2.3'},
    {modid: 'reskin', version: '1.2.0'},
    {modid: 'travelersbackpack', version: '1.0.35'},
    {modid: 'bookshelf', version: '2.3.590'}
    ] });
bot.on('spawn', () => {
  bot.chat('/register contraseña')  //ACCIÓN AL CONECTARSE
});

bot.on("move", function() {
  //Se activa cuando el bot se mueve

  bot.setControlState("jump", true); //Empieza a saltar continuamente
  setTimeout(() => {
    //Establece un delay
    bot.setControlState("jump", false); //Para de saltar 
  }, 1000); //Delay

  setTimeout(() => {
    //Establece un delay
    bot.setControlState("forward", true); //Empieza a andar hacia adelante
    setTimeout(() => {
      //Establece un delay
      bot.setControlState("forward", false); //Para de andar 
    }, 500); //Delay
  }, 1000); //Delay

  setTimeout(() => {
    //Establece un delay
    bot.setControlState("back", true); //Empieza a andar hacia atrás 
    setTimeout(() => {
      //Establece un delay
      bot.setControlState("back", false); //Para de andar
    }, 500); //Delay
  }, 2000); //Delay

  setTimeout(() => {
    //Establece un delay
    bot.setControlState("right", true); //Empieza a andar hacia la derecha
    setTimeout(() => {
      //Establece un delay
      bot.setControlState("right", false); //Para de andar
    }, 2000); //Delay
  }, 500); //Delay

  setTimeout(() => {
    //Establece un delay
    bot.setControlState("left", true); //Empieza a andar hacia la izquierda
    setTimeout(() => {
      //Establece un delay
      bot.setControlState("left", false); //Para de andar
    }, 2000); //Delay
  }, 500); //Delay
});

bot.on('kicked', console.log)
bot.on('error', console.log)
bot.on('end', createBot)
}

createBot()