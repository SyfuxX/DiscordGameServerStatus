const botFile = require("../../bot");
const { consoleError } = require("../functions/console/consoleError");

let command = '';

module.exports = {

  onBotInteraction: async function () {
    botFile.client.on('interactionCreate', async (interaction) => {
      if (interaction.isCommand()) await isCommand(interaction);
      if (interaction.isSelectMenu()) await isSelectMenu(interaction);
    });
  }

}

async function isSelectMenu(interaction) {
  await interaction.deferReply({ ephemeral: true });

  try {
    await command.executeSelectMenu(interaction);
  } catch (error) {
    await consoleError('Error while executing a select menu.', error);
    await interaction.editReply({
      content: `There was an error while executing this select menu!`,
      ephemeral: true
    });
  }
}

async function isCommand(interaction) {
  await interaction.deferReply({ ephemeral: true });

  command = botFile.client.commandCollection
    .get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    await consoleError('Error while executing a command.', error);
    await interaction.editReply({
      content: `There was an error while executing this command!`,
      ephemeral: true
    });
  }
}
