const Discord = require('discord.js');

const bot = new Discord.Client();

const token ='Njg5NTk1NDMyMDQ4Nzg3NTI0.XnFPgw.L-V5AaKMFnzZnL4CVjYglDtpLsU';

const PREFIX= '!';

var version = '1.0.1'

var servers = {};

bot.on('ready',() =>{
    console.log('This Bot Is Now Online!');
    bot.user.setActivity(' Children Screaming', {type: 'LISTENING'}).catch(console.error);

})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome')
    if(!channel) return;

    channel.send(`Welcome to the server, ${member}`)
});

bot.on('ready',() => { 
    console.log('This bot is online!')
})

bot.on('message', message =>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.reply('pong!');
            break;  
        case 'Website':
            message.channel.send('youtube.com/Project Horizon')
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.send('Version 1.0.1 Beta');
            }else{
                message.channel.send('Invaild Arguement');
            }    
        break; 
        case 'clear':
            if(!args[1]) return message.reply('Error please define second argument ' )
            message.channel.bulkDelete(args[1]);
            break;

            

    }
})

bot.on('message', msg =>{
    if(msg.content ===  "Fuck you"){
        msg.reply('Fuck You!')
    }
})


bot.login(token);


bot.login(process.env.BOT_TOKEN);
