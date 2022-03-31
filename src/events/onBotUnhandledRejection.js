const botFile = require('../../bot');
const { consoleError } = require("../functions/console/consoleError");

module.exports = {

  onBotUnhandledRejection: async function () {
    botFile.client.on('unhandledRejection', async (error) => {
      await consoleError("Unhandled Error:", error);
    });
  }

}
