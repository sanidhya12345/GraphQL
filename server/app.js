/** @format */

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
  })
);

//server is listening at port 4000
app.listen(4000, () => {
  console.log("server is listening at port 4000");
});
