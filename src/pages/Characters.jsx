import { useState, useEffect } from "react"
import { supabase } from "../lib/supabaseClient"
import CharacterCard from "../components/CharacterCard"

export default function Characters() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        supabase
            .from('characters').select('*')
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
            <h1 className="page-title">Personajes actuales</h1>
            <br />
            <ul>
                {characters.map(c => <li key={c.id}><b>{c.name}</b>: {c.bio }</li>)}
            </ul>
            <br />
            <img className="img-personajes" src="https://sxpjkvdcgsdzncoljzkx.supabase.co/storage/v1/object/public/wallpapers/personajes-con-medidas-a-color.webp" alt="Ficha de personajes con sus estaturas" />
            <br />
            <section >
                {
                    characters.map(c => (
                        <div className="">
                                <CharacterCard character={c}></CharacterCard>
                        </div>
                    ))
                }
            </section>
        </div>
    )
}