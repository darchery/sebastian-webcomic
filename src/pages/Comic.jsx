import { useEffect, useRef, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Comic() {
    const [chapters, setChapters] = useState([])
    const [selectedChapter, setSelectedChapter] = useState(null)
    const [pages, setPages] = useState([])
    const topRef = useRef(null)

    const [loadingChapters, setLoadingChapters] = useState(true) // Empieza cargando
    const [loadingPages, setLoadingPages] = useState(true) // Empieza cargando

    const [error, setError] = useState(null)
    const errorMessageChapter = 'No se pudieron cargar los capítulos. Inténtelo más tarde.'
    const errorMessagePages = 'No se pudieron cargar las páginas. Inténtelo más tarde.'


    // 1 fetch: capítulos al montar
    useEffect(() => {
        supabase
            .from('chapters')
            .select('*')
            .order('chapter_number')
            .then(({ data, error }) => {
                if (!error) {
                    setChapters(data)
                    if (data.length > 0) {
                        setSelectedChapter(data[0])
                    }
                } else {
                    setError(errorMessageChapter)
                    console.error(error)
                }
                setLoadingChapters(false) 
            })
    }, [])

    // 2 fetch: cargar las páginas del capítulo
    useEffect(() => {
        if (!selectedChapter) return
        supabase
            .from('comic_pages')
            .select('*')
            .eq('chapter_id', selectedChapter.id)
            .order('page_number')
            .then(({ data, error }) => {
                if (!error) {
                    setPages(data)
                } else {
                    setError(errorMessagePages)
                    console.error(error)
                }
                setLoadingPages(false)
            })
    }, [selectedChapter])

    // Al cambiar de capítulo vuelve arriba para empezar desde la página 1
    const handleChange = (e) => {
        const ch = chapters.find(c => c.id === e.target.value)
        setSelectedChapter(ch)
        setLoadingPages(true)
        topRef.current?.scrollIntoView()
    }

    if (loadingChapters) return <p className="spinner"></p>
    if (error) return (
        <div>
            <p className="empty-text">{error}</p>
            <button className="btn" onClick={() => window.location.reload()}>Reintentar</button>
        </div>
    )

    return (
        <div className='comic-reader' ref={topRef}>
            <h1 className='page-title'>Cómic</h1>

            <div className='chapter-selector'>
                <label htmlFor="chapter">Capítulo: </label>
                <select value={selectedChapter?.id || ''} onChange={handleChange} name="chapter" id="chapter">
                    {
                        chapters.map(ch => (
                            <option key={ch.id} value={ch.id}>
                                Cap. {ch.chapter_number} - {ch.title}
                            </option>
                        ))
                    }
                </select>
            </div>
             {
                    loadingPages ? (
                        <p className='spinner'></p>
                    ) : pages.length > 0 ? (
                        <>
                            {/* Páginas apiladas verticalmente: sólo scroll*/}
                            <div className='page-scroll'>
                                {
                                    pages.map(p => (
                                        <img 
                                            key={p.id}
                                            src={p.image_url}
                                            alt={`Página ${p.page_number}`}
                                            className='comic-page'
                                        >
                                        </img>
                                    ))
                                }
                            </div>
                        </>
                    ) : (
                        <p className="empty-text">
                            {
                                selectedChapter ? 'No hay páginas disponibles'
                                : 'Selecciona un capítulo'
                            }
                        </p>
                    )
            }
        </div>
    )
 
}