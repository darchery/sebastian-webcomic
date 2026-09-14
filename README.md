# Cosas del más allá — Webcomic

Web del cómic **Cosas del más allá**: una comedia absurda sobre un funcionario del Infierno cuya vida cotidiana acaba llevándolo a relacionarse con demonios, muertos, personajes históricos y figuras celestiales.

## Funcionalidades

- **Leer el cómic online** — índice de capítulos con portada + lector con scroll continuo (estilo manga/webtoon)
- **Conocer a los personajes** — grid de tarjetas + ficha individual por personaje (biografía, especie, edad, trabajo)
- **Descargar wallpapers e ilustraciones** — imágenes descargables en PNG
- **Leer noticias y novedades** — feed de novedades desde Supabase
- **Donar vía Ko-fi o PayPal**
- **Página 404** personalizada
- **Estados de carga y error** en todas las páginas con fetch
- **Navbar responsive** — logo con imagen, menú hamburguesa en móvil

## Stack

- **React + Vite** — frontend
- **React Router DOM** — navegación entre páginas (rutas dinámicas)
- **Supabase** — base de datos (PostgreSQL) + storage de imágenes + auth
- **CSS vanilla** — estilos con custom properties, sin framework
- **Vercel** — hosting y despliegue automático

## Estructura

```
sebastian-webcomic/
├── public/
│   └── favicon.png               Icono de pestaña
├── src/
│   ├── components/
│   │   ├── CharacterCard.jsx     Tarjeta de personaje (Link a ficha)
│   │   ├── DonationLink.jsx      Enlaces de donación (Ko-fi / PayPal)
│   │   ├── Footer.jsx            Pie de página
│   │   ├── Layout.jsx            Layout global (Navbar + Footer)
│   │   └── Navbar.jsx            Barra de navegación (logo imagen + responsive)
│   ├── hooks/
│   │   └── useDocumentTitle.js   Títulos dinámicos de página
│   ├── lib/
│   │   ├── constants.js          URLs de donación
│   │   └── supabaseClient.js     Conexión a Supabase
│   ├── pages/
│   │   ├── CharacterPage.jsx     Ficha individual de personaje
│   │   ├── Characters.jsx        Grid de personajes
│   │   ├── Comic.jsx             Lector de cómic (select + páginas)
│   │   ├── ComicSelector.jsx     Índice de capítulos (grid con portadas)
│   │   ├── Donate.jsx            Donaciones (Ko-fi / PayPal)
│   │   ├── Downloads.jsx         Descargables (wallpapers)
│   │   ├── Home.jsx              Inicio (hero, spotlight, secciones)
│   │   ├── News.jsx              Noticias y novedades
│   │   └── Page404.jsx           Página no encontrada
│   ├── App.jsx                   Rutas
│   ├── index.css                 Estilos globales (tema rosa/claro)
│   └── main.jsx                  Entry point
├── index.html
├── package.json
└── vite.config.js
```
