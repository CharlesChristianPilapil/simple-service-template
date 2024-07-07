import type {
  APIGatewayProxyStructuredResultV2,
  APIGatewayProxyEventV2,
  Handler,
} from "aws-lambda";
import { Library } from "../model/model";

export const handler: Handler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> => {
  const { title, author, released_date, rating, category } = JSON.parse(
    event.body
  );

  const data = Library;

  await data.create({
    title,
    author,
    released_date,
    rating,
    category,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `${title} by ${author} added to library`,
    }),
  };
};