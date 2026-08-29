import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import DonationLink from "../components/DonationLink";
import { NavLink } from "react-router-dom";


export default function Home() {
    const [news, setNews] = useState([]);
    const [character, setCharacter] = useState();

    useEffect(() => {
        supabase
            .from('news_posts')
            .select('*')
            .order('created_at', {ascending: false}) // Noticias más recientes
            .limit(3)
            .then(({data, error}) => {
                if (!error) {
                    setNews(data)
                } else {
                    console.log(error);
                } 
            })
        supabase
            .from('characters')
            .select('*')
            .then(({data ,error}) => {
                if (!error && data?.length) { // Verifica si data no es null/undefined y tiene al menos un elemento
                    const randomCharacter = data[Math.floor(Math.random() * data.length)];
                    setCharacter(randomCharacter)
                } else {
                    console.log(error)
                }
            })
    }, [])

    return(
        <>
            <div className="content home">
                <section className="page-title">
                    <h1>COSAS DEL MAS ALLÁ con JULIO y SEBASTIÁN</h1>
                </section>
                <br />
                {/* HERO */}
                <section className="hero">
                    <h2 className="hero-title">Sebastián</h2>
                    <br />
                    <p className="hero-subtitle">Un demonio normal y corriente viviendo en el infierno.</p>
                    <NavLink to="/comic" className="btn">Leer Comic</NavLink>
                </section>
                <br />
                <section className="home-section">
                    <h2>Introducción</h2>
                    <div className="news-card">
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
                    </div>
                </section>
                <br />
                <section className="home-section">
                    {/* Párrafo de las disculpas-disclaimer*/}
                    <h2>Disclaimer</h2>
                    <div className="news-card">
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
                    </div>
                </section>
                <br />
                <section className="home-section">
                    <h2>Contribuciones</h2>
                    <div className="news-card">
                        <p>
                            La mayoría del contenido será gratuito, tanto las ilustraciones alternativas, wallpapers e 
                            incluso la mayoría del contenido del cómic.
                            Y, por último, si te gusta el proyecto y quieres ayudarme a seguir dibujándolo, dejo por aquí mi 
                            <DonationLink name="kofi"></DonationLink> y mi <DonationLink name="paypal"></DonationLink>. 
                            Cualquier pequeño apoyo será muy agradecido y ayudará a que pueda seguir dedicando tiempo a este cómic.
                            </p>
                    </div>
                </section>
                <br />
                <section className="home-section">
                    <div className="news-card">
                        <p className="dani">
                            <b>Gracias por estar aquí y espero que disfrutes de la historia.</b>
                        </p>
                        <br />
                        <p>
                            <span className="dani"><b><i>~ Dani</i></b></span>
                        </p>
                    </div>
                </section>
                <br />
                {/* CHARACTER SPOTLIGHT */}
                <section className="home-section">
                    <h2>Conoce a los Personajes</h2>
                    {character ? (
                        <div className="spotlight">
                            <img src={character.image_url} alt={character.name} />
                            <div>
                            <h3>{character.name}</h3>
                            <p>{character.bio}</p>
                            <NavLink to="/characters" className="btn">Ver todos</NavLink>
                            </div>
                        </div>
                    ) : (
                        <p className="empty-text">No hay personajes aun</p>
                    )}
                </section>
                <br />
                {/* NEWS */}
                <section className="home-section">
                    <h2>Ultimas Novedades</h2>
                    {news.length === 0 ? (
                        <p className="empty-text">No hay novedades aún</p>
                    ) : (
                        <div className="news-preview">
                            {
                                news.map(post => (
                                    <div key={post.id} className="news-card">
                                        <h3>{post.title}</h3>
                                        <p className="news-date">
                                            {new Date(post.created_at).toLocaleDateString('es-ES')}
                                        </p>
                                        <p>{post.content?.slice(0, 150)}{post.content?.length > 150 && '...'}</p>
                                    <br/>
                                    </div>
                                    )
                                )
                            }
                        </div>
                    )}
                </section>
            </div>
        </>

    )
}