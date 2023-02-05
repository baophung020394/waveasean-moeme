let config;
console.log("process.env", process.env);
switch (process.env.NODE_ENV) {
  case "production":
    config = require("./production");
    break;
  case "development":
  default:
    config = require("./development");
}

console.log("config", config);

export default config;
