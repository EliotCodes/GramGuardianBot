const { InlineKeyboard } = require("grammy");

const startCommand = async (ctx) => {
  const { first_name: firstName } = ctx.from;
  const { first_name: botName, username: botUsername } = ctx.me;

  const inlineKeyboard = new InlineKeyboard()
    .url("➕ Add Me To Your Group", `https://t.me/${botUsername}?startgroup=true`)
    .row()
    .url("👤 Developer", "https://t.me/eliotcodes")
    .url("🔗 Source Code", "https://github.com/eliotcodes/gramGuardianBot")
    .row()
    .text("📖 Help", "help");

  await ctx.reply(
    `<b>Hello!</b> ${firstName} \n\nI am ${botName}, I can help you moderate your Telegram groups. \n\nIf you want to know more about me, please type /help`,
    { reply_markup: inlineKeyboard, parse_mode: "HTML" }
  );
};

module.exports = startCommand;
