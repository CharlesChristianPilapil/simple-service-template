import type {
  APIGatewayProxyStructuredResultV2,
  APIGatewayProxyEventV2,
  Handler,
} from "aws-lambda";
import { Library } from "../model/model";

export const handler: Handler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> => {
  const body = JSON.parse(event.body);

  const data = Library;

  const dataList = await data.bulkCreate(body);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Passing multiple data successful...",
      data: dataList,
    }),
  };
};
