const https = require("https");
const app = require("./app");
const path = require("path");
const fs = require("fs");
const PORT = 8000;
const server = https.createServer(
  {
    cert: fs.readFileSync(path.join(__dirname, "cert.pem")),
    key: fs.readFileSync(path.join(__dirname, "key.pem")),
  },
  app
);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
