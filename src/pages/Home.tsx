import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="home">
      <section className="home__hero">
        <p className="home__tag">Vivero Goyditosh</p>
        <h1>Gestiona tu vivero de forma simple</h1>
        <p className="home__lead">
          Bienvenido al panel base de tu CRUD. Desde aqui vamos a crear, listar,
          editar y eliminar productos paso a paso.
        </p>
        <button type="button" className="home__button">
          Empezar ahora
        </button>
      </section>

      <section className="home__grid" aria-label="Siguientes pasos">
        <Link to="/inventario" className="home__card home__card--link">
          <h2>Inventario</h2>
          <p>Registra plantas, precio, stock y categoria.</p>
        </Link>
        <Link to="/ventas" className="home__card home__card--link">
          <h2>Ventas</h2>
          <p>Prepara la base para controlar pedidos y clientes.</p>
        </Link>
        <Link to="/reportes" className="home__card home__card--link">
          <h2>Reportes</h2>
          <p>Visualiza rapidamente lo mas vendido de tu vivero.</p>

        </Link>
      </section>
    </main>
  )
}

export default Home
