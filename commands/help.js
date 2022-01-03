module.exports = {
    name: "help",
    description: "shows commands that are currently supported.",
    execute(message, args) {
        message.channel.send('The commands that are currently working are:\nHelp\nTest\nscramble\nrps\n\nTo use a command just type c! and the command name');
    },
};