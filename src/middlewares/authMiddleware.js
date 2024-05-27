const User = require("../models/userModel");
const authMiddleware = async (ctx, next) => {
  const { id: userID } = ctx.from;

// Create a new user in the database if it doesn't exist
  const userInfo = await User.findOne({ userID: userID });

  if (!userInfo) {
    await User.create({
      userID: userID,
      username: ctx.from.username,
      warnings: 0,
      banned: false,
      muted: false,
    });
    return;
  }
  await next();
};

module.exports = authMiddleware;
