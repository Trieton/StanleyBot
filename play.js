const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

const queue = new Map();

module.exports = 
{
    name: 'play',
    aliases: ['skip', 'stop'],
    cooldown: 0,
    description: 'Official music bot of Stanley',

    async execute(message, args, cmd, client, Discord)
    {
        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.channel.send('You need to be in a voice channel to do this.');
        const permissions = voice_channel.permissionsFor(message.client.user);
        if (!permissions.has('Connect')) return message.channel.send('You dont have permission to do this.');
        if (!permissions.has('Speak')) return message.channel.send('You dont have permission to do this.');
        
    }
}