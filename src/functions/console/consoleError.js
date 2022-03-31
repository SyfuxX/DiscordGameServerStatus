const { dateTimeNow } = require("../date/dateTimeNow");
module.exports = {

  /**
   * Send Error message to console
   * @param {string} message
   * @param {*} error
   * @param {*} connection
   */
  consoleError: async function(message, error, connection = "") {
    console.log(`${ await dateTimeNow() } ${ message }`);
    if (error) console.error("Details: " + error);

    if (connection !== "") connection.release();
  }

}
