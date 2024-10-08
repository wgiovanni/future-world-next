import { createAgent } from "../../utils/openai/createAgent";
import { getProducts } from "../../services/shopify/products";
import { Chat } from "../components/chat/chat";

export default async function ChatPage() {
  const products = await getProducts();
  const productTitles = products.map((product) => product.title);
  const flatProductTitles = productTitles.join(",");

  const agent = createAgent(flatProductTitles);
  return (
    <>
      <Chat agent={agent}/>
    </>
  );
}
