const discord = require('discord.js');
const client = new discord.Client({
  intents: [
    discord.Intents.FLAGS.GUILD_MESSAGES,
    discord.Intents.FLAGS.GUILDS,
  ]
});

const fetch = import('node-fetch');
const types = require('discord-api-types/v10');
const rest = require('@discordjs/rest');

const config = require('./src/config.json');
const { consoleError } = require("./src/functions/console/consoleError");
const { loadCommandFiles } = require("./src/functions/command/loadCommandFiles");
const { onBotReady } = require('./src/events/onBotReady');
const { onBotMessage } = require("./src/events/onBotMessage");
const { onBotDisconnect } = require("./src/events/onBotDisconnect");
const { onBotUnhandledRejection } = require("./src/events/onBotUnhandledRejection");
const { onBotInteraction } = require("./src/events/onBotInteraction");

client.commandCollection = new discord.Collection();

module.exports.client = client;
module.exports.fetch = fetch;
module.exports.types = types;
module.exports.rest = rest;

loadCommandFiles().then()
  .catch(async (error) => await consoleError('Failed to load Command Files', error));
onBotReady().then()
  .catch(async (error) => await consoleError('Failed on Bot Ready', error));
onBotMessage().then()
  .catch(async (error) => await consoleError('Failed on Bot Message', error));
onBotInteraction().then()
  .catch(async (error) => await consoleError('Failed on Bot Interaction Create', error));
onBotUnhandledRejection().then()
  .catch(async (error) => await consoleError('Failed on Bot Unhandled Rejection', error));
onBotDisconnect().then()
  .catch(async (error) => await consoleError('Failed on Bot Disconnect', error));

client.login(config.token.discord).then();
