import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import DonationLink from "../components/DonationLink";

export default function Home() {
    return(
        <>
            <div className="content">
                <h1>COSAS DEL MAS ALLÁ con JULIO y SEBASTIÁN</h1>
                <br />
                <section>
                    <h2>Introducción</h2>
                    <br />
                    <p>
                        Hola, querido lector. Soy <b>Dani</b>, y bienvenido a mi proyecto.
                    </p>
                    <br />
                    <p>  
                        En esta web podrás disfrutar de una comedia absurda sobre un <b>funcionario del Infierno</b> cuya 
                        vida cotidiana acaba llevándolo a relacionarse con demonios, muertos, personajes históricos 
                        y figuras celestiales, mientras intenta encontrar su lugar entre todos ellos.
                    </p>
                    <br />
                    <p>
                        <b>Sebastián Malicia</b> es un tío bastante normal, con una vida gris, un trabajo aburrido y un piso
                        compartido. En esta historia tendrás la oportunidad de conocerle y verle trabajar, meter la pata, 
                        hacer el idiota y, sobre todo, sobrevivir a todo tipo de desastres.
                    </p>
                    <br />
                    <p>
                        Este cómic es un <b>proyecto completamente personal</b>, nacido de mi imaginación y de mi afición por 
                        dibujar y crear historias. Es una historia que llevo desarrollando con mucho cariño y que, poco a poco, 
                        estoy convirtiendo en realidad.
                    </p>
                    <br />
                    <p>
                    Gracias por confiar en este proyecto y por dedicarle un poco de tu tiempo. Espero sinceramente 
                        que te guste <b>Sebastián/Cosas del más allá</b>, y que disfrutes leyendo sus historias tanto como yo me divierto creándolas.
                    </p>
                </section>
                <br />
                <section>
                    {/* Párrafo de las disculpas-disclaimer*/}
                    <h2>Disclaimer</h2>
                    <br />
                    <p>
                        Una pequeña aclaración legislativa: Esta historia es <b>completamente ficticia</b> y está hecha con <b>intención humorística</b>. 
                        No pretendo representar fielmente la realidad ni tengo intención de ofender a ningún individuo, colectivo, 
                        creencia o institución.
                    </p>
                    <br />
                    <p>
                        Todo lo que ocurre en estas páginas pertenece al universo de Sebastián y Julio. Si algo te 
                        resulta absurdo, probablemente es   porque lo es.
                    </p>
                </section>
                <br />
                <section>
                    <h2>Contribuciones</h2>
                    <br />
                    <p>
                        La mayoría del contenido será gratis, tanto las ilustraciones alternativas, wallpapers e 
                        incluso la mayoría del contenido del cómic.
                        Y, por último, si te gusta el proyecto y quieres ayudarme a seguir dibujándolo, dejo por aquí mi 
                        <DonationLink name="kofi"></DonationLink> y mi <DonationLink name="paypal"></DonationLink>. 
                        Cualquier pequeño apoyo será muy agradecido y ayudará a que pueda seguir dedicando tiempo a este cómic.
                    </p>
                </section>
                <br />
                <section>
                    <p>
                        <b>Gracias por estar aquí y espero que disfrutes de la historia.</b>
                    </p>
                    <br />
                    <p>
                        <span className="dani"><b><i>~ Dani</i></b></span>
                    </p>
                </section>
            </div>
        </>

    )
}