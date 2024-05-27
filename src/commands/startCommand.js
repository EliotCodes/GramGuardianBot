const { InlineKeyboard } = require("grammy");
const User = require("../models/userModel");

const startCommand = async (ctx) => {
  const { first_name: firstName, username: Username, id: userID } = ctx.from;
  const { first_name: botName, username: botUsername } = ctx.me;

  /* Create User if it doesnt exist */
  const userInfo = await User.findOne({ userID: userID });

  if (!userInfo) {
    const newUser = await User.create({
      userID: userID,
      username: Username,
      warnings: 0,
      banned: false,
      muted: false,
    });
  }

  const text = `<b>Hello!</b> ${firstName} \n\nI am ${botName}, I can help you moderate your Telegram groups.
  \nIf you want to know more about me, please type /help`;

  const inlineKeyboard = new InlineKeyboard()
    .url(
      "➕ Add Me To Your Group",
      `https://t.me/${botUsername}?startgroup=true`
    )
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
