const botFile = require('../../bot');
const { executeCommand } = require("../functions/command/loadCommandFiles");

module.exports = {

  onBotMessage: async function () {
    botFile.client.on('messageCreate', async (message) => {
      if (message.author.bot) return;

      const cmd = await executeCommand(message);
      if (cmd) cmd.command.execute(message, cmd.arguments);
    });
  }

}
