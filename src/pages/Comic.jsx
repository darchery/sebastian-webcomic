import { useEffect, useRef, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function Comic() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [chapters, setChapters] = useState([])
    const [pages, setPages] = useState([])
    const topRef = useRef(null)

    const [loadingChapters, setLoadingChapters] = useState(true) // Empieza cargando
    const [loadingPages, setLoadingPages] = useState(true) // Empieza cargando

    const [error, setError] = useState(null)
    const errorMessageChapter = 'No se pudieron cargar los capítulos. Inténtelo más tarde.'
    const errorMessagePages = 'No se pudieron cargar las páginas. Inténtelo más tarde.'

    // Estado derivado: no se usa useState
    const selectedChapter = (id && chapters.find(ch => ch.id === id)) || chapters[0] || null

    // 1 fetch: Cargar la lista de capítulos una vez al montar
    useEffect(() => {
        supabase
            .from('chapters')
            .select('*')
            .order('chapter_number')
            .then(({ data, error }) => {
                if (!error) {
                    setChapters(data || [])
                } else {
                    setError(errorMessageChapter)
                    console.error(error)
                }
                setLoadingChapters(false)
            })
    }, [id])

    // 2 fetch: Cargar las páginas del capítulo cuando cambie el capítulo en el select
    useEffect(() => {
        // Comprueba antes de leer id si selectedChapter es null o undefined, si lo es devuelve undefined
        if (!selectedChapter?.id) return

        // El estado de carga se gestiona en la promesa o callback
        // Se usa cuando el useEffect puede cambiar por la modificación
        // de una variable, como selectedChapter
        let isMounted = true

        supabase
            .from('comic_pages')
            .select('*')
            .eq('chapter_id', selectedChapter.id)
            .order('page_number')
            .then(({ data, error }) => {
                // Si no está montado no establecemos la ṕaginas => no me toca
                if (!isMounted) return
                if (!error) {
                    setPages(data || [])
                } else {
                    setError(errorMessagePages)
                    console.error(error)
                }
                setLoadingPages(false)
            })

        // Se ejecuta cuando el componente se destruye o cuando se cambia de capítulo
        return () => {
            isMounted = false
        }

    }, [selectedChapter])

    // Al cambiar de capítulo vuelve arriba para empezar desde la página 1
    const handleChange = (e) => {
        setLoadingPages(true)
        navigate(`/comic/${e.target.value}`)
    }

    if (loadingChapters) return <p className="spinner"></p>
    if (error) return (
        <div>
            <p className="empty-text">{error}</p>
            <button className="btn" onClick={() => window.location.reload()}>Reintentar</button>
        </div>
    )
    if (!selectedChapter) return <p className='empty-text'>No hay capítulos disponibles</p>

    return (
        <div className='comic-reader content' ref={topRef}>
            <Link to="/comic" className="btn back-link">← Volver al índice</Link>
            <h1 className='page-title'>Cómic</h1>

            <div className='chapter-selector'>
                <label htmlFor="chapter">Capítulo: </label>
                <select
                    value={selectedChapter?.id || ''}
                    onChange={handleChange}
                    name="chapter"
                    id="chapter"
                >
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