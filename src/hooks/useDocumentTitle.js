import { useEffect } from "react";

export default function useDocumentTitle(title) {
    useEffect(() => {
        const prevTitle = document.title
        document.title =
            title ?
                `${title} | Cosas del más allá`
                :
                'Cosas del más allá - Webcomic'

        // Cuando el componente(p.e: Comic) que esté usando este 
        // hook se destruya => este pone el título que tenía antes
        return () => {
            document.title = prevTitle
        }
    }, [title])
}