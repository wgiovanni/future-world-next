"use server"

import { createUserMutation } from "../graphql/mutations/createUserMutation";
import { GraphQLClientSingleton } from "../graphql/index"
import { createAcessToken } from "../utils/auth/createAccessToken";
import { redirect } from "next/navigation";

export const handleCreateUser = async (formData: FormData) => {
    const formDataObject = Object.fromEntries(formData);
    delete formDataObject["password_confirmation"];
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
    const variables = {
        input: {
            ...formDataObject,
            // +1 7867845087 its working
            phone: '+1' + formDataObject.phone
        }
    }

    const { customerCreate } = await graphqlClient.request(createUserMutation, variables);
    const { customerUserErrors, customer } = customerCreate
    console.log(customerUserErrors)
    console.log(customer)
    if ( customer?.firstName) {
        await createAcessToken(formDataObject.email as string, formDataObject.password as string);

        redirect('/store');
    }
}