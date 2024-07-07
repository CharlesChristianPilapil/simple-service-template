import type {
  APIGatewayProxyStructuredResultV2,
  APIGatewayProxyEventV2,
  Handler,
} from "aws-lambda";
import { Library } from "../model/model";

export const handler: Handler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> => {
  const { id, item, to } = JSON.parse(event.body);

  const data = Library;

  await data.update({ [item]: to }, { where: { id } });

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `${item} edited to ${to}`,
    }),
  };
};
