"use server";

import { GraphQLClientSingleton } from "../graphql/index";
import { createCartMutation } from "../graphql/mutations/createCartMutation";
import { createUserMutation } from "../graphql/mutations/createUserMutation";
import { createAcessToken } from "../utils/auth/createAccessToken";
import { validateAccessToken } from "../utils/auth/validateAccessToken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const handleCreateUser = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  delete formDataObject["password_confirmation"];
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const variables = {
    input: {
      ...formDataObject,
      // +1 7867845087 its working
      phone: "+1" + formDataObject.phone,
    },
  };

  const { customerCreate } = await graphqlClient.request(
    createUserMutation,
    variables
  );
  const { customerUserErrors, customer } = customerCreate;
  console.log(customerUserErrors);
  console.log(customer);
  if (customer?.firstName) {
    await createAcessToken(
      formDataObject.email as string,
      formDataObject.password as string
    );

    redirect("/store");
  }
};

export const handleLogin = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  const accessToken = await createAcessToken(
    formDataObject.email as string,
    formDataObject.password as string
  );

  if (accessToken) {
    redirect("/store");
  }
};

export const handleCreateCart = async (items: CartItem[]) => {
  const cookiesStore = cookies();
  const accesToken = cookiesStore.get("accessToken")?.value as string;
  if (!accesToken) redirect("/login");
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const customer = await validateAccessToken();
  const variables = {
    input: {
      buyerIdentity: {
        customerAccessToken: accesToken,
        email: customer?.email,
      },
      lines: items.map((item) => ({
        merchandiseId: item.merchandiseId,
        quantity: item.quantity,
      })),
    },
  };
  const {
    cartCreate,
  }: {
    cartCreate?: {
      cart?: {
        checkoutUrl: string;
      };
    };
  } = await graphqlClient.request(createCartMutation, variables);
  return cartCreate?.cart?.checkoutUrl;
};
