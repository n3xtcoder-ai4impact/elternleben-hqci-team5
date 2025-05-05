import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log('Ping function triggered');
  try {
    context.res = {
      status: 200,
      body: 'Hello fron chat API.',
    };
  } catch (err) {
    context.log.error('Ping failed', err);
    context.res = {
      status: 500,
      body: 'Something went wrong',
    };
  }
};

export default httpTrigger;
