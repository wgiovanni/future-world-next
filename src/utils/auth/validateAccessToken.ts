import { customerName } from "../../graphql/queries/customerName";
import { GraphQLClientSingleton } from "../../graphql/index";
import { cookies } from "next/headers";

export const validateAccessToken = async () => {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value || "";
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
    const { customer } = await graphqlClient.request(customerName, {
      customerAccessToken: accessToken,
    });
    return customer;
  } catch (error) {
    console.error(error);
  }
};
