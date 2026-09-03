import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Downloads() {
    const [downloads, setDownloads] = useState([])

    const [loading, setLoading] = useState(true) // Empieza cargando
    const [error, setError] = useState(null)
    const errorMessage = 'No se pudieron cargar los descargables. Inténtelo más tarde.'


    useEffect(() => {
        supabase
            .from('downloads')
            .select('*')
            .eq('public', true)
            .order('created_at', {ascending: false})
            .then(({ data, error }) => {
                if (!error) {
                    setDownloads(data)
                } else {
                    setError(errorMessage)
                    console.error(error)
                }
                setLoading(false) 
            })
        }, [])
    
    async function downloadAsPng(imgUrl, filename) {
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.src = imgUrl

        // Espera con control de error: no continua si la imagen falla
        await new Promise((resolve) => {
            img.onload = resolve
            img.onerror = resolve
        })

        if (!img.complete || img.naturalWidth === 0) {
            console.error('No se pudo cargar la imagen (posible problema de CORS)')
            return
        }

        const canvas = document.createElement('canvas')
        canvas.width = img.naturalWidth
        canvas.height = img.naturalHeight
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0)

        const a = document.createElement('a')
        a.download = `${filename}.png`
        a.href = canvas.toDataURL('image/png')
        document.body.appendChild(a)   // más fiable
        a.click()
        document.body.removeChild(a)
    }

    if (loading) return <p className="spinner"></p>
    if (error) return (
        <div>
            <p className="empty-text">{error}</p>
            <button className="btn" onClick={() => window.location.reload()}>Reintentar</button>
        </div>
    )

    return (
        <div className="content">
            <h1 className="page-title">Descargables</h1>
            {
                downloads.length === 0 ? 
                (
                    <p className="empty-text">No hay descargables disponibles</p>
                )
                :
                (
                    <div className="downloads-grid">
                        {
                            downloads.map(d => (
                                <div key={d.id} className="download-card">
                                    <a href={d.image_url} target="_blank" rel="noopener">
                                        <img src={d.image_url} alt={d.title} />
                                    </a>
                                    <div className="download-info">
                                        <h3>{d.title}</h3>
                                        <button className="btn" onClick={() => downloadAsPng(d.image_url, d.title)}>Descargar</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                )
            }
        </div>
    )
}