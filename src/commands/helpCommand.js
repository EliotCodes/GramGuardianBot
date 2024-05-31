const { InlineKeyboard } = require("grammy");

const helpCommand = (ctx) => {
  let mainMenuText, mainMenuCallack;

  if (ctx.chat.type === "private") {

    mainMenuText = "🔙 Main Menu";
    mainMenuCallack = "menu";

  } else {

    mainMenuText = "❌ Close";
    mainMenuCallack = "close";

  }
  const inlineKeyboard = new InlineKeyboard()
    .url("📃 Full Help", "https://fullhelp.com")
    .url("📢 Support", "https://t.me/eliotcodes")
    .row()
    .text(mainMenuText, mainMenuCallack);

  const text = `<b>📌 Here is the list of available commands:</b>\n
<code>/ban</code> - Ban a user from the group.
    Example: Reply to the user and type <code>/ban</code>.
    You can also specify a reason for the ban: <code>/ban [reason]</code>.\n
<code>/kick</code> - Remove a user from the group.
    Example: Reply to the user and type <code>/kick</code>.
    You can also specify a reason for the kick: <code>/kick [reason]</code>.\n
<code>/mute</code> - Mute a user in the group.
    Example: Reply to the user and type <code>/mute</code>.
    You can also specify the duration for the mute: <code>/mute [duration]</code>.\n
<code>/warn</code> - Issue a warning to a user.
    Example: Reply to the user and type <code>/warn</code>.
    You can also specify the reason for the warning: <code>/warn [reason]</code>.\n
<code>/unban</code> - Unban a user from the group.
    Example: Type <code>/unban [@username]</code>.`;

  if (ctx.update.callback_query) {
    ctx.editMessageText(text, {
      reply_markup: inlineKeyboard,
      parse_mode: "HTML",
    });

  } else {

    const messageID = ctx.message.message_id;
    ctx.reply(text, {
      reply_markup: inlineKeyboard,
      parse_mode: "HTML",
      reply_to_message_id: messageID,
    });
    
  }
};

module.exports = helpCommand;
