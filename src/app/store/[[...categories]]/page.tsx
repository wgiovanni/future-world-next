interface CategoryProps {
  params: {
    categories: string[],
    searchParams?: string
  }
}

export default function category(props: CategoryProps) {
  const { categories } = props.params
  console.log(categories)
  console.log(props)
  return (
    <div>
      <h1>Categoria dinamica: {categories}</h1>
    </div>
  )
}
