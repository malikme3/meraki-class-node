import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { TeamsController } from './src/conroller/teams-controller';

export const hello: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
 let teamContro =  new TeamsController();
 

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: teamContro.name,
    }),
  };

  cb(null, response);
};
