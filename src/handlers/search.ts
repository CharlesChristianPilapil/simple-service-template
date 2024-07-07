import type {
  APIGatewayProxyStructuredResultV2,
  APIGatewayProxyEventV2,
  Handler,
} from "aws-lambda";
import { Library } from "../model/model";
import { Op } from "sequelize";

export const handler: Handler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> => {
  const { item, search } = JSON.parse(event.body);

  const data = Library;

  const dataList = await data.findAll({
    where: { [item]: { [Op.like]: `%${search}%` } },
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Search results for ${search} from ${item}`,
      data: dataList,
    }),
  };
};
