const { sendResponse } = require("../functions/message/sendResponse");
const botFile = require("../../bot");
const { consoleLog } = require("../functions/console/consoleLog");

const commandFilesDirectory = `${ process.cwd() }/src/commands`;

module.exports = {
  name: "reload",
  description: "Command to reload commands.",
  admin: true,
  argumentList: [],

  async execute(message, args) {
    const commandNameToReload = args[0];

    if (!message.client.commandCollection.has(commandNameToReload)) {
      return await sendResponse(message, `Command \`!${ commandNameToReload }\` couldn't be reloaded! *(Command has not been found)*`, true);
    }

    delete require.cache[require.resolve(`${ commandFilesDirectory }/${ commandNameToReload }`)];
    message.client.commandCollection.delete(commandNameToReload);

    const command = require(`${ commandFilesDirectory }/${ commandNameToReload }.js`);

    botFile.client.commandCollection
      .set(command.name, command);

    await consoleLog(`Command '${ command.name }' has been reloaded!`);
    await sendResponse(message, `Command \`!${ command.name }\` has been reloaded!`, true);
  }
};
