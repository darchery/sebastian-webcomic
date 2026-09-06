import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";


export default function CharacterPage() {
    const { id }  = useParams()
    const [character, setCharacter] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const errorMessage = 'No se pudieron cargar los datos del personaje. Inténtelo más tarde.'

    useEffect(() => {
        supabase
            .from('characters')
            .select('*')
            .eq('id', id)
            .single()
            .then(({ data, error}) => {
                if (!error) {
                    setCharacter(data)
                } else {
                    setError(errorMessage)
                    console.error(error)
                }
                setLoading(false)
            })
    }, [id])

    if (loading) return <p className="spinner"></p>
    if (error) return <p className="empty-text">{errorMessage}</p>

    return (
        <div className="content character-page">
            <Link to="/characters" className="back-link">← Volver a Personajes</Link>

            <div className="character-profile">
                <img src={character.image_url} alt={character.name} className="character-profile-img"/>
                <div className="character-profile-info">
                    <h1 className="page-title">{character.name} {character.surname && character.surname}</h1>
                    <p className="character-phrase">{character.short_phrase}</p>
                    <p><b>Especie:</b> {character.specie}</p>
                    <p><b>Edad:</b> {character.age}</p>
                    <p><b>Ocupación:</b> {character.work}</p>
                </div>
            </div>

            <div className="character-bio-full">
                <h2>Biografía</h2>
                <p>{character.bio}</p>
            </div>
        </div>
    )
}