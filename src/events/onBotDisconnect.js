const botFile = require('../../bot');
const { consoleLog } = require("../functions/console/consoleLog");

module.exports = {

  onBotDisconnect: async function() {
    botFile.client.on('disconnect', async () => {
      await consoleLog("Shutting down...");
    });
  }

}
