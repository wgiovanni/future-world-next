export default function layout({ children}: { children: React.ReactNode }) {
  return (
    <main>
        <nav>Navegación de las categorías</nav>
        { children }
    </main>
  )
}
