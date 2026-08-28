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

    // Actualmente es el de Lucas
    function botonDonacion() {
        return(
            <form className="boton-paypal" action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="HQ3AM5X6327SU" />
                <input type="image" src="https://www.paypalobjects.com/es_ES/ES/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Botón Donar con PayPal" />
                <img alt="" border="0" src="https://www.paypal.com/es_ES/i/scr/pixel.gif" width="1" height="1" />
            </form>
        )
    }

    return (
        <>  
            <div className="content">
                <h1 className="page-title">DONATIVOS Y FORMAS DE COLABORAR</h1>
                <br />
                <div className="news-card">
                    <section>
                        <p>
                            Hola! Muchas gracias por acercarte a la zona de donativos.
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
                <br />
                {botonDonacion()}
                {/* Implementación vía petición a supabase: imgDonacion && <img className="img-donacion" src={imgDonacion} alt="Foto de Sebastián trabjando en la oficina" />*/}
                <img className="img-donacion" src="https://sxpjkvdcgsdzncoljzkx.supabase.co/storage/v1/object/public/wallpapers/sebastian-oficina.webp" alt="Foto de Sebastián trabjando en la oficina" />
            </div>
        </>
    )
}