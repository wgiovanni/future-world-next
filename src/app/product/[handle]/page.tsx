
"use client"

import { useParams, useSearchParams } from "next/navigation"

export default function ProductPage() {
    const params = useParams()
    const searchParams = useSearchParams()
    const id = searchParams.get("id")
    console.log(searchParams)
    console.log(id)
    return (
        <div>
            <h1>Product page</h1>
        </div>
    )
}
