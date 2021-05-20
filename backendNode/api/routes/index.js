const animais = require("./animaisRoute");

module.exports = (app) => {
  app.use(animais);
};
