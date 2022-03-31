const config = require("../../config.json");

module.exports = {

  /**
   * Send a response text to the channel
   * Message will be deleted after a certain time
   * @param message
   * @param text : string
   * @param deleteUserMessage : boolean
   * @returns {Promise<*>}
   */
  sendResponse: async function(message, text, deleteUserMessage = false) {
    const channel = message.channel;
    const response = channel.send(text);

    return response.then(async (msg) => {
      setTimeout(async () => {
        if (deleteUserMessage) await message.delete();
        await msg.delete();
      }, 5000);
    });
  },

  sendHelp: async function(message, command) {
    console.log(command);
    let helpEmbed = {
      title: `Help for command: ${ config.prefix }${ command.name }`,
      description: command.description,
    };

    if (command.argumentList.length > 0) {
      // helpEmbed +=
    }

    const DMChannel = await message.author.createDM();

    if (DMChannel) {
      await DMChannel.send('Test');
      await message.delete();
    }
  }

}
