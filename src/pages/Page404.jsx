import { useLocation } from "react-router-dom"

export default function Page404() {
    const location = useLocation()

    return (
        <div className="content">
            <h1 className="page-title">404 - Página no encontrada</h1>
            <p className="news-card">
                La URL solicitada <i><b>{location.pathname}</b></i> no ha sido encontrada en este servidor.
            </p>
        </div>
    )
}