import { useState, useEffect } from "react"
import { supabase } from "../lib/supabaseClient"
import CharacterCard from "../components/CharacterCard"
import useDocumentTitle from "../hooks/useDocumentTitle"

export default function Characters() {
    const [characters, setCharacters] = useState([])

    const [loading, setLoading] = useState(true) // Empieza cargando
    const [error, setError] = useState(null)
    const errorMessage = 'No se pudieron cargar los personajes. Inténtelo más tarde.'


    useEffect(() => {
        supabase
            .from('characters')
            .select('*')
            .order('order', { ascending: true })
            .then(({ data, error }) => {
                if (!error) {
                    setCharacters(data || [])
                } else {
                    setError(errorMessage)
                    console.error(error)
                }
                setLoading(false)
            })
    }, [])

    useDocumentTitle('Personajes')

    if (loading) return <p className="spinner"></p>
    if (error) return (
        <div>
            <p className="empty-text">{error}</p>
            <button className="btn" onClick={() => window.location.reload()}>Reintentar</button>
        </div>
    )

    return (
        <div className="content">
            <h1 className="page-title">Personajes</h1>
            {
                characters.length === 0 ?
                    (<p className="empty-text">No hay personajes disponibles</p>)
                    :
                    (<section>
                        <div className="characters-grid">
                            {
                                characters.map(c => (
                                    <CharacterCard key={c.id} character={c}></CharacterCard>
                                )
                                )
                            }
                        </div>
                    </section>)
            }
        </div>
    )
}