import { Metadata } from "next";
import { MainProducts } from "../components/home/MainProducts";

export const metadata: Metadata = {
  title: "Future world",
  description: "Welcome to the future BiWorld, an ecommerce from other cenruty",
  keywords: ["ecommerce", "future", "world", "technology"]
}

export default function Home() {
  return (
    <div>
      <main>
        <MainProducts />
      </main>
    </div>
  );
}
