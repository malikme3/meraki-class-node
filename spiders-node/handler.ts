import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { TeamsController } from './src/conroller/teams-controller';

export const hello: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
  let teamContro = new TeamsController();

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: teamContro.name,
    }),
  };

  cb(null, response);
};

const app = require('express');
app.use('users', (req: any, res: any, next) => {
  res.statusCode(200).send('yahoox');
});
const serverless = require('serverless-http');

export const user: Handler = serverless(app);
