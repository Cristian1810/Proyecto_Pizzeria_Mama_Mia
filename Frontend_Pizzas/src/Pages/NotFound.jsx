import { Link } from "react-router-dom"
import NotFoundImage from "../assets/404error.jpg"

const NotFound = () => {
  return (
    <main className="container mt-5 text-center">
        <img src={NotFoundImage} alt="Pagina no Existe" className="img-fluid w-50" />
        <h3 className="mt-4 text-danger">Error! Esta pagina no existe</h3>
        <p className="text-muted">URL no encontrada</p>
        <Link to="/" className="btn btn-success mt-3">Volver al Inicio</Link>
    </main>
  )
}

export default NotFound
