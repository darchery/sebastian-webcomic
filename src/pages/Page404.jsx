import { useLocation } from "react-router-dom"
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
        </div>
    )
}