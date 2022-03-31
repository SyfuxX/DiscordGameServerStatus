const config = require('../../config.json');

module.exports = {

  /**
   * Check if id is the same of the channels
   * @param {string} channel - channel name
   * @param {*} message - need message
   */
  checkChannel: function checkChannel(channel, message) {
    return message.channel.id === channel || message.channel.id === config.id.channel.bot;
  }

}
