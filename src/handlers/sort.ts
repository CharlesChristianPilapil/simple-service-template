import type {
  APIGatewayProxyStructuredResultV2,
  APIGatewayProxyEventV2,
  Handler,
} from "aws-lambda";
import { Library } from "../model/model";

export const handler: Handler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> => {
  const { item, order } = JSON.parse(event.body);

  const data = Library;

  const dataList = await data.findAll({
    order: [[item, order]],
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Sort by ${item} table, ${order} order`,
      data: dataList,
    }),
  };
};
