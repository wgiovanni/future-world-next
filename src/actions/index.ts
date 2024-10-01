"use server"

import { createUserMutation } from "../graphql/mutations/createUserMutation";
import { GraphQLClientSingleton } from "../graphql/index"

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

    const data = await graphqlClient.request(createUserMutation, variables);
    console.log(data);
    console.log(data.customerCreate.customerUserErrors);
}