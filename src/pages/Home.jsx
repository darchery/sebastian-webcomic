import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Home() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        supabase.from('characters').select('*').
        then(({ data, error }) => {
            if (error) {
                console.error(error)
            } else {
                setCharacters(data)
                console.log(data)
            }
        })
    }, [])

    return(
        <div>
            {characters.map(c => <p key={c.id}>{c.name}: {c.bio }</p>)}
        </div>
    )
}