import DonationLink from "../components/DonationLink"
/*import { supabase } from "../lib/supabaseClient"
import { useState, useEffect } from "react"*/

export default function Donate() {
    // Petición de una imagen concreta
    /*const [imgDonacion, setImgDonacion] = useState('')

    useEffect(() => {
        supabase
            .from('downloads')
            .select('image_url')
            .eq('id', 'c1c3438e-302f-46b8-8dfb-cce41af6efbb')
            .single()
            .then(({ data, error }) => {
                if (!error) setImgDonacion(data.image_url)
                else console.log(error)
            })
    }, [])*/

    return (
        <>  
            <div className="content">
                <div className="donate-page">
                    <h1 className="page-title">Apoya el proyecto</h1>
                     <br />
                    <div className="donate-intro news-card">
                        <section>
                            <p>
                                Hola! Muchas gracias por acercarte a la zona de donativos.
                            </p>
                        </section>
                        <br />
                        <section>
                            <p>
                                Si disfrutas del comic, considera apoyar con una donacion.
                                Tu contribucion nos ayuda a seguir creando contenido.
                            </p>
                        </section>
                        <br />
                        <section>
                            <p>
                                Contamos con el servicio de <DonationLink name="kofi"></DonationLink>, en el cual disponemos
                                de donativos y servicios de membresía, que contará con ilustraciones exclusivas para 
                                miembros y contenido del cómic anticipado.
                            </p>
                        </section>
                        <br />
                        <section>
                            <p>
                                Además se podrá hacer donaciones vía <DonationLink name="paypal"></DonationLink>.
                            </p>
                        </section>
                    </div>
                    <div className="donate-buttons">
                        <a 
                            href="https://ko-fi.com/TU_USUARIO"
                            target="_blank"
                            rel="noopener"
                            className="donate-btn kofi-btn"
                        >
                            Ko-fi
                        </a>
                        <a 
                            href="https://www.paypal.com/donate?token=2wmpgLbdDaT3dw22q86BJ5Pup0GtXg-x7U7mY0Y10qgfjiD_lfQZLR78DbtZvDtvocsWA5ZJJg2gOpQA"
                            target="_blank"
                            rel="noopener"
                            className="donate-btn paypal-btn"
                        >
                            Paypal
                        </a>
                    </div>
                    <div className="donate-info">
                        <h3>¿Para que se usa?</h3>
                        <ul>
                            <li>Mejorar la calidad del arte</li>
                            <li>Nuevas páginas y capítulos</li>
                            <li>Ilustraciones exclusivas para descarga</li>
                        </ul>
                    </div>
                    {/* Implementación vía petición a supabase: imgDonacion && <img className="img-donacion" src={imgDonacion} alt="Foto de Sebastián trabjando en la oficina" />*/}
                    <img className="img-donacion" src="https://sxpjkvdcgsdzncoljzkx.supabase.co/storage/v1/object/public/wallpapers/sebastian-oficina.webp" alt="Foto de Sebastián trabjando en la oficina" />
                </div>
            </div>
        </>
    )
}