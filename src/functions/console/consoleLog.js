const { dateTimeNow } = require("../date/dateTimeNow");

module.exports = {

  consoleLog: async function(message) {
    return console.log(`${ await dateTimeNow() } ${ message }`);
  },

}
