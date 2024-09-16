import Link from "next/link"
import { getCollections } from "../../services/shopify/collections"

export default async function layout({ children }: { children: React.ReactNode }) {
  const collections = await getCollections()
  return (
    <main>
      <nav>
        {
          collections.map((collection) => (
            <Link key={collection.id} href={'store/' + collection.handle}>
              {collection.title}
            </Link>
          ))
        }
      </nav>
      {children}
    </main>
  )
}
