import type { APIGatewayProxyStructuredResultV2, Handler } from "aws-lambda";
import { Library } from "../model/model";

export const handler: Handler =
  async (): Promise<APIGatewayProxyStructuredResultV2> => {
    const data = Library;
    const dataList = await data.findAll();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Library...",
        data: dataList,
      }),
    };
  };
