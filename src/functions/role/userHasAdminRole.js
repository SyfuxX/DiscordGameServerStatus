const config = require("../../config.json");

module.exports = {

  userHasAdminRole: async function (message) {
    if (message.member.id === config.id.owner) return true;
    return message.member.permissions.has("ADMINISTRATOR");
  }

};
