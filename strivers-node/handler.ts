import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';

const serverless = require('serverless-http');
const express = require('express');

const app = express();

app.use('/teams', async (req: any, res: any, next: any) => {
  res.send('Hello World!');
});

module.exports.hello = serverless(app);
