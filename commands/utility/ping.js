const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5.0,
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};