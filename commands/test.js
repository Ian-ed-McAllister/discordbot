module.exports = {
    name: "test",
    description: "Checks to see if bot is working",
    execute(message, args) {
        message.channel.send('CatBot is working');
    },
};