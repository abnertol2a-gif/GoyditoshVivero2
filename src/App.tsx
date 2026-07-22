import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Inventario from './pages/Inventario.tsx'
import Ventas from './pages/Ventas.tsx'
import Reportes from './pages/Reportes.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/reportes" element={<Reportes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
