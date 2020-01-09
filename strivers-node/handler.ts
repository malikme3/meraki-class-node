import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';

const serverless = require('serverless-http');
const express = require('express');

const app = express();

app.use('/users', async (req: any, res: any, next: any) => {
  try {
    res.status(200).send('user hanlder');
  } catch (err) {
    throw new Error('controller erro');
  }
});

module.exports.hello = serverless(app);
