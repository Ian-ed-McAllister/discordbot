module.exports = {
    name: "rps",
    description: "Play a game of rock paper scissors against the bot.",
    async execute(message, args) {
        picks = ['rock','paper','scissors']
        
        const filter = m => m.author.id === message.author.id;
        botPick = Math.floor(Math.random() * 3);
        await message.channel.send('please enter your choice.');
        message.channel.awaitMessages(filter, {
            max: 1,
            error: ["time"],
            time: 10000
        })
        .then(collected => {
            
            const rpsPick = collected.first();
            correctInput = 0
            z = 2
            for(let i = 0; z > i ; i++ ){
                if (rpsPick.content.toLowerCase() === picks[i]){
                    userPick = i 
                    correctInput = 1 
                }
            }

            message.channel.send(`The bot picked ${picks[botPick]}`);
            if (correctInput === 0 ) return message.channel.send('Invalid input the bot wins');
            else if (userPick === botPick) return message.channel.send('You have tied');
            // If you win
            else if ((userPick === 0) && (botPick === 2)) return message.channel.send('You have won!');
            else if ((userPick === 1) && (botPick === 0)) return message.channel.send('You have won!');
            else if ((userPick === 2) && (botPick === 1)) return message.channel.send('You have won!');
            // If the bot wins
            else if ((userPick === 0) && (botPick === 1)) return message.channel.send('You have Lost.');
            else if ((userPick === 1) && (botPick === 2)) return message.channel.send('You have Lost.');
            else if ((userPick === 2) && (botPick === 0)) return message.channel.send('You have Lost.');            
        })
        .catch(() => {
            message.channel.send(`Sorry you ran out of time.`);
        })

    },
};