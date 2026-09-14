import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import useDocumentTitle from "../hooks/useDocumentTitle";

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
            .order('created_at', { ascending: false })
            .then(({ data, error }) => {
                if (!error) {
                    setDownloads(data || [])
                } else {
                    setError(errorMessage)
                    console.error(error)
                }
                setLoading(false)
            })
    }, [])

    useDocumentTitle('Descargables')

    async function downloadAsPng(imgUrl, filename) {
        try {
            const img = new Image();
            img.crossOrigin = 'anonymous'; // Compatible con el CORS de tu Supabase
            img.src = imgUrl;

            await new Promise((resolve, reject) => {
                img.onload = resolve;
                img.onerror = () => reject(new Error('No se pudo cargar la imagen'));
            });

            // Pintamos en canvas para convertir a PNG real
            const canvas = document.createElement('canvas');
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            // toBlob genera un archivo binario PNG nativo
            canvas.toBlob((blob) => {
                if (!blob) return;
                const blobUrl = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = blobUrl;
                a.download = `${filename}.png`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(blobUrl);
            }, 'image/png');
        } catch (err) {
            console.error('Error al convertir a PNG:', err);
            // Si algo fallase, como salvavidas abre la imagen original
            window.open(imgUrl, '_blank');
        }
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
                                            <img
                                                src={d.image_url}
                                                alt={d.title}
                                                loading="lazy"
                                                decoding="async"
                                            />
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