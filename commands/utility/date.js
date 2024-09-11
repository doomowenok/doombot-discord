const { SlashCommandBuilder, time } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
            .setName('get_time')
            .setDescription('Get Minsk current time.'),
    async execute(interaction) {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        await interaction.reply(`${hours}:${minutes}`);
    }
}