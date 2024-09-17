
import { redirect } from "next/navigation"
import { getProducts } from "./../../../services/shopify/products"
import { ProductView } from "././../../components/product/ProductView/"

interface ProductPageProps {
    searchParams: {
        id: string
    }
}

export async function generateMetadata({ searchParams }: ProductPageProps) {
    const id = searchParams.id
    const products = await getProducts(id)
    const product = products[0]

    return {
        title: product.title,
        description: product.description,
        keywords: product.tags,
        openGraph: {
            images: [product.image]
        }
    }
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
    const id = searchParams.id
    const products = await getProducts(id)
    const product = products[0]

    if (!id) {
        redirect('/store')
    }
    return (
        <ProductView product={product} />
    )
}
