require("dotenv").config();
const { Bot } = require("grammy");

const bot = new Bot(process.env.BOT_TOKEN);

/* COMMANDS */

/* START */
bot.command("start", require("./src/commands/startCommand"));
bot.callbackQuery("menu", require("./src/commands/startCommand"));

/* HELP */
bot.command("help", require("./src/commands/helpCommand"));
bot.callbackQuery("help", require("./src/commands/helpCommand"));

bot.start()
console.log("Bot has started")

