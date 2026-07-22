import { Link } from 'react-router-dom'
import './ModulePage.css'

function Reportes() {
  return (
    <main className="module-page">
      <header className="module-page__header">
        <p className="module-page__kicker">Modulo</p>
        <h1>Reportes</h1>
        <p>
          Esta pantalla sera la base para visualizar reportes de ventas, productos y clientes.
        </p>
      </header>

      <section className="module-page__panel" aria-label="Proximo paso">
        <h2>Siguiente paso</h2>
        <p>
          Luego conectaremos ventas con inventario para descontar stock de forma
          automatica.
        </p>
        <Link to="/" className="module-page__link">
          Volver al Home
        </Link>
      </section>
    </main>
  )
}

export default Reportes
