import { shopifyUrls } from "./urls";
import { env } from "../../config/env";


export const getCollections = async () => {
    try {
      const response = await fetch(shopifyUrls.collections.all, {
        headers: new Headers({
          "X-Shopify-Access-Token": env.SHOPIFY_TOKEN || "",
        }),
      });
      const { smart_collections } = await response.json();
      const transformedCollections = smart_collections.map((collection: any) => {
        return {
          id: collection.id,
          title: collection.title,
          handle: collection.handle
        }
      })
  
      return transformedCollections;
    } catch (error) {
      console.log(error);
    }
  };