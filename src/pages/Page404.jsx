import { Link, useLocation } from "react-router-dom"
import useDocumentTitle from "../hooks/useDocumentTitle"

export default function Page404() {
    const location = useLocation()

    useDocumentTitle('Página no encontrada')

    return (
        <div className="content">
            <h1 className="page-title">404 - Página no encontrada</h1>
            <p className="text-card">
                La URL solicitada <i><b>{location.pathname}</b></i> no ha sido encontrada en este servidor.
            </p>
            <Link to="/" className="btn">Volver al inicio</Link>
            <img
                src="https://sxpjkvdcgsdzncoljzkx.supabase.co/storage/v1/object/public/wallpapers/dibujo-error-404.webp"
                alt="Dibujo de Sebastián y Julio perdidos"
                className="img-404"
            />
        </div>
    )
}