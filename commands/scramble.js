


module.exports = {
    name: "scramble",
    description: "Will take a word from a array and will scramble it and allows the user to guess it. ",
    
    async execute (message, args) {
        const filter = m => m.author.id === message.author.id;
        
        const {words, } = require( './wordfile.json')
        wordpicked = Math.floor( Math.random()* words.length );
        
        wordtemp = words[wordpicked]
        arr = wordtemp.split('');


        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        wordtemp = arr.join('')

        scrambledword = wordtemp;
        
        
        await message.channel.send(`Try to unscramble this word: ${scrambledword}`);
        
        message.channel.awaitMessages(filter, {
            max: 1,
            error: ["time"],
            time: 15000
        })
        
        .then(collected => {
            const m = collected.first();
            if (m.content.toLowerCase() !== words[wordpicked].toLowerCase()) return message.channel.send(` Sorry that's wrong, The correct word was ${words[wordpicked]}`);
            
            
            return message.channel.send(` Congrats you got it right!!!`);
        })
        .catch(() => {
            message.channel.send(`Sorry you ran out of time. The word was: ${words[wordpicked]}`);
        })

    },
};