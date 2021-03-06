/* eslint-disable camelcase */
/* eslint-disable no-console */
const mongoose = require("mongoose");
const SmeeClient = require("smee-client");
const app = require("./app");
require("dotenv").config();
// eslint-disable-next-line import/order
// Server listening on port
const port = process.env.PORT || 5000;

// Uri to connect mongodb
const uri = process.env.ATLAS_URI;

// Connect to DB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

const smee_issue = new SmeeClient({
  source: "https://smee.io/DPRAJgsLmMZ4x1i",
  target: "http://localhost:5000/issue",
  logger: console,
});

const smee_milestone = new SmeeClient({
  source: "https://smee.io/CdTNBbuTf7UTClP",
  target: "http://localhost:5000/milestone",
  logger: console,
});

const smee_pullrequest = new SmeeClient({
  source: "https://smee.io/9ZZIlWHgkwlkMdhK",
  target: "http://localhost:5000/pullrequest",
  logger: console,
});

smee_issue.start();
smee_milestone.start();
smee_pullrequest.start();

app.listen(port, () => console.log(`Server starting on port ${port}!`));
