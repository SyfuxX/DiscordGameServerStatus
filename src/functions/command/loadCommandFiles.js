const botFile = require("../../../bot");
const { consoleLog } = require("../console/consoleLog");
const config = require("../../config.json");
const fs = require("fs");
const { userHasAdminRole } = require("../role/userHasAdminRole");
const { sendResponse, sendHelp } = require("../message/sendResponse");

const commandFilesDirectory = `${ process.cwd() }/src/commands`;
const commandFiles = fs.readdirSync(commandFilesDirectory)
  .filter(file => file.endsWith('.js'));

module.exports = {

  loadCommandFiles: async function () {
    if (!commandFiles.length) {
      await consoleLog('No Command files found!');
    }

    for (const file of commandFiles) {
      const command = require(`${ commandFilesDirectory }/${ file }`);

      botFile.client.commandCollection
        .set(command.name, command);

      await consoleLog(`Command '${ command.name }' has been loaded!`);
    }
  },

  executeCommand: async function(message) {
    const split = await splitArguments(message);
    const commandName = split.shift().toLowerCase();
    const client = message.client;
    const cmd = {
      arguments: split,
      commandName: commandName,
      command: client.commandCollection
        .get(commandName)
    };

    // Check if message is a command that exist
    if (!client.commandCollection.has(cmd.commandName)) {
      return false;
    }

    // Check if argument is `help`
    if (split.length > 0 && split[0] === 'help') {
      return await sendHelp(message, cmd.command);
    }

    // Check if command is only for admins
    // Also check if arguments are only for admins
    const argumentToCheck = split.length > 0 ? cmd.command.argumentList.find((arg) => arg.name === split[0]) : false;

    if (await isAdminOnly(cmd.command, message) || (argumentToCheck && await isAdminOnly(argumentToCheck, message))) {
      return await sendResponse(message, "You have not the required privileges to" +
        " execute this command.", true);
    }

    return cmd;
  }

};

async function splitArguments(message) {
  return message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
}

async function isAdminOnly(cmd, message) {
  return cmd.admin && !await userHasAdminRole(message);
}
