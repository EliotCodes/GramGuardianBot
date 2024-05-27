const { InlineKeyboard } = require("grammy");
const User = require("../models/userModel");

const startCommand = async (ctx) => {
  const { first_name: firstName } = ctx.from;
  const { first_name: botName, username: botUsername } = ctx.me;
  const text = `<b>Hello!</b> ${firstName} \n\nI am ${botName}, I can help you moderate your Telegram groups.
  \nIf you want to know more about me, please type /help`;
    
  const inlineKeyboard = new InlineKeyboard()
    .url("➕ Add Me To Your Group", `https://t.me/${botUsername}?startgroup=true`)
    .row()
    .url("👤 Developer", "https://t.me/eliotcodes")
    .url("🔗 Source Code", "https://github.com/eliotcodes/gramGuardianBot")
    .row()
    .text("📖 Help", "help");

    if (ctx.update.callback_query) {
     await ctx.editMessageText(text, {
        reply_markup: inlineKeyboard,
        parse_mode: "HTML",
      });
    } else {
     await ctx.reply(text, { reply_markup: inlineKeyboard, parse_mode: "HTML" });
    }

};

module.exports = startCommand;
