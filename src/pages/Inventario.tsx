import { Link } from 'react-router-dom'
import './ModulePage.css'

function Inventario() {
  return (
    <main className="module-page">
      <header className="module-page__header">
        <p className="module-page__kicker">Modulo</p>
        <h1>Inventario</h1>
        <p>
          Aqui construiremos el CRUD principal de plantas: listado, creacion,
          edicion y eliminacion.
        </p>
      </header>

      <section className="module-page__panel" aria-label="Proximo paso">
        <h2>Siguiente paso</h2>
        <p>
          En la siguiente iteracion crearemos la tabla de inventario con datos
          iniciales y acciones CRUD.
        </p>
        <Link to="/" className="module-page__link">
          Volver al Home
        </Link>
      </section>
    </main>
  )
}

export default Inventario
