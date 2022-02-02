const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const schema = require("./schema/schema");
const mongodb = require("mongodb");
const mongoose = require("mongoose");

const db = "mongodb+srv://akos:12345@cluster0.vv4zp.mongodb.net/graphql?retryWrites=true&w=majority";

mongoose.connect(db);
mongoose.connection.once("open", () => {
    console.log("connected")
})

const app = express();

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {console.log("listening...")});