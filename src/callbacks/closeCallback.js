const closeCallback = (ctx) => {

    if(ctx.updates.callback_query){
        ctx.deleteMessage()
    }

}

module.exports = closeCallback;