import { useEffect, useState } from "react"
import { supabase } from "../lib/supabaseClient"

export default function News() {
    const [news, setNews] = useState([])

    const [loading, setLoading] = useState(true) // Empieza cargando
    const [error, setError] = useState(null)
    const errorMessage = 'No se pudieron cargar las novedades. Inténtelo más tarde.'


    useEffect(() => {
        supabase
            .from('news_posts')
            .select('*')
            .order('created_at', {ascending: false})
            .then(({ data, error}) => {
                if (!error) {
                    setNews(data)
                } else {
                    setError(errorMessage)
                    console.error(error)
                }
                setLoading(false)
            })
    }, [])

    if (loading) return <p className="spinner"></p>
    if (error) return (
        <div>
            <p className="empty-text">{error}</p>
            <button className="btn" onClick={() => window.location.reload()}>Reintentar</button>
        </div>
    )

    return (
        <div className="content">
            <h1 className="page-title">Novedades</h1>
            {
                news.length === 0 ?
                (
                    <p className="empty-text">No hay novedades aún</p>
                ) 
                :
                (
                    <div className="news-list">
                        {
                            news.map(n => (
                                <article key={n.id} className="news-article">
                                    <h2>{n.title}</h2>
                                    <time className="news-date">
                                        {
                                            new Date(n.created_at).toLocaleDateString('es-ES', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })
                                        }
                                    </time>
                                    <p>{n.content}</p>
                                </article>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}