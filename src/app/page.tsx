import { Hero } from "./components/home/Hero";
import { Description } from "./components/home/Description";
import { MainProducts } from "./components/home/MainProducts";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Description />
        <MainProducts />
      </main>
    </div>
  );
}
