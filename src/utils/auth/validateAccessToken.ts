import { customerName } from "../../graphql/queries/customerName";
import { GraphQLClientSingleton } from "../../graphql/index";
import { cookies } from "next/headers";

export const validateAccessToken = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value || "";
  try {
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
    const {
      customer,
    }: {
      customer: {
        firstName: string;
        email: string;
      };
    } = await graphqlClient.request(customerName, {
      customerAccessToken: accessToken,
    });
    return customer;
  } catch (error) {
    console.error(error);
  }
};
