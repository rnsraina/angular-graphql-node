import express from 'express';
import cors from 'cors';
import json from 'body-parser'
import {graphqlHTTP} from "express-graphql";
import {GraphQLSchema} from "graphql";
import db from './db.js';
import RootQueryType from "./RootQuery.js";
import RootMutation from "./RootMutation.js";

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const app = express()
    .use(cors(corsOptions))
    .use(json());

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutation
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(4201, (err) => console.log('Server listening on port 4201'));