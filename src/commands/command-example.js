module.exports = {
  name: "command name",
  description: "command description",
  admin: true / false,
  argumentList: [
    {
      name: "argument name",
      description: "argument description",
      admin: true / false,
    },
  ],

  async execute(message, args) {
    console.log(message, args);
  }
};
