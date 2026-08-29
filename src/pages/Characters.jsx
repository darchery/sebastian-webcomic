import { useState, useEffect } from "react"
import { supabase } from "../lib/supabaseClient"
import CharacterCard from "../components/CharacterCard"

export default function Characters() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        supabase
            .from('characters')
            .select('*')
            .order('name', {ascending: false})
            .then(({ data, error }) => {
                if (error) {
                    console.error(error)
                } else {
                    setCharacters(data)
                }
            }
            )
    }, [])

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