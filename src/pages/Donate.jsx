export default function Donate() {
    return (
        <>  
            <div>
                <h1>DONATIVOS Y FORMAS DE COLABORAR</h1>
                <br />
                <p>
                    Hola! Muchas gracias por acercarte a la zona de donativos.
                </p>
                <br />
                <p>
                    Contamos con el servicio de <a href="https://ko-fi.com/">Ko-fi</a>, en el cual disponemos
                    de donativos y servicios de membresía que contará con que ilustraciones exclusivas para 
                    miembros y contenido del cómic anticipado.
                </p>
                <br />
                <p>
                    Además se podrá hacer donaciones vía <a href="https://www.paypal.com/es/home">PayPal</a> 
                </p>
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="hosted_button_id" value="HQ3AM5X6327SU" />
                    <input type="image" src="https://www.paypalobjects.com/es_ES/ES/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Botón Donar con PayPal" />
                    <img alt="" border="0" src="https://www.paypal.com/es_ES/i/scr/pixel.gif" width="1" height="1" />
                </form>

            </div>
        </>
    )
}