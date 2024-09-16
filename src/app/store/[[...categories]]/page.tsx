import { ProductsWrapper } from "./../../components/Store/ProductsWrapper"
import { getProducts } from "./../../../services/shopify"
interface CategoryProps {
  params: {
    categories: string[],
    searchParams?: string
  }
}

export default async function category(props: CategoryProps) {
  const products = await getProducts()
  const { categories } = props.params
  console.log(categories)
  console.log(props)
  return (
    <ProductsWrapper products={products}/>
  )
}
