import { useState, useEffect } from "react"
import { supabase } from "../lib/supabaseClient"
import { Link } from "react-router-dom"

export default function ComicSelector() {
    const [chapters, setChapters] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const errorMessage = 'No se pudieron cargar los capítulos. Inténtelo más tarde.'

    useEffect(() => {
        supabase
            .from('chapters')
            .select('*')
            .order('chapter_number')
            .then(({ data, error }) => {
                if (!error) {
                    setChapters(data || [])
                } else {
                    setError(errorMessage)
                    console.error(error)
                }
                setLoading(false)
            })
    }, [])

    if (loading) return <p className="spinner"></p>
    if (error) return <p className="empty-text">{errorMessage}</p>

    return (
        <div className="content">
            <h1 className="page-title">Capítulos</h1>
            {
                chapters.length > 0 ? (
                    <div className="chapters-grid">
                        {
                            chapters.map(c => (
                                <Link
                                    key={c.id}
                                    to={`/comic/${c.id}`}
                                    className="chapter-card"
                                >
                                    <img
                                        src={c.cover_image_url}
                                        alt={`Capítulo ${c.chapter_number}: ${c.title}`}
                                    />
                                    <p className="chapter-card-title">
                                        {`Cap. ${c.chapter_number} - ${c.title}`}
                                    </p>
                                </Link>
                            ))
                        }
                    </div>
                ) : (
                    <p className="empty-text">
                        No hay capítulos disponibles
                    </p>
                )
            }
        </div>
    )
}