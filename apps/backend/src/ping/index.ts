import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  console.log("Ping function triggered");
  context.res = {
    status: 200,
    body: 'Hello fron chat API.',
  };
};

export default httpTrigger;