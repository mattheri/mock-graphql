import express from "express";
import jsonGraphqlExpress from "json-graphql-server";
import fs from "fs";
import wait from "./wait.mjs";

const PORT = 3001;
const ENDPOINT = "/graphql";
const DB_LOCATION = "db.json";
const ENCODING = "utf8";

const app = express();
const data = fs.readFileSync(DB_LOCATION, ENCODING);

app.use(wait(2500));
app.use(ENDPOINT, jsonGraphqlExpress.default(JSON.parse(data)));
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
