const { Client, Intents } = require('discord.js');

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
});
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

   if (commandName === 'react-custom') {
		const message = await interaction.reply('Harshit!', { fetchReply: true });
		message.react('922044424903622716');
	}
	
});


client.login('OTIyMDU1MjI0MjA0NjAzNDcz.Yb742A.bRlYwhV_Z3sMLn1Zp9a1RqwT_1M');
