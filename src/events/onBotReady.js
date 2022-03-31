const botFile = require('../../bot');
const { consoleLog } = require('../functions/console/consoleLog');

module.exports = {

  onBotReady: async function () {
    botFile.client.once('ready', async () => {
      await consoleLog(`${ botFile.client.user.username } has just started up!`);
    });
  }

}
