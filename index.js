require("dotenv").config();
const { Bot } = require("grammy");

const bot = new Bot(process.env.BOT_TOKEN);

/* MIDDLEWARES */

/* AUTH */
bot.use(require("./src/middlewares/authMiddleware"));

/* COMMANDS */

/* START */
bot.chatType("private").command("start", require("./src/commands/startCommand"));
bot.chatType("private").callbackQuery("menu", require("./src/commands/startCommand"));

/* HELP */
bot.command("help", require("./src/commands/helpCommand"));
bot.callbackQuery("help", require("./src/commands/helpCommand"));

/* BAN */
bot.chatType(["group", "supergroup"]).command("ban", require("./src/commands/banCommand"));

bot.start()
console.log("Bot has started")

