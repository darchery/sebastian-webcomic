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
│   └── favicon.png             Icono de pestaña
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          Barra de navegación (logo imagen + responsive)
│   │   ├── Footer.jsx          Pie de página
│   │   ├── Layout.jsx          Layout global (Navbar + Footer)
│   │   ├── CharacterCard.jsx   Tarjeta de personaje (Link a ficha)
│   │   └── DonationLink.jsx    Enlaces de donación (Ko-fi / PayPal)
│   ├── pages/
│   │   ├── Home.jsx            Inicio (hero, spotlight, secciones)
│   │   ├── Comic.jsx           Lector de cómic (select + páginas)
│   │   ├── ComicSelector.jsx   Índice de capítulos (grid con portadas)
│   │   ├── Characters.jsx      Grid de personajes
│   │   ├── CharacterPage.jsx   Ficha individual de personaje
│   │   ├── News.jsx            Noticias y novedades
│   │   ├── Downloads.jsx       Descargables (wallpapers)
│   │   ├── Donate.jsx          Donaciones (Ko-fi / PayPal)
│   │   └── Page404.jsx         Página no encontrada
│   ├── lib/
│   │   └── supabaseClient.js   Conexión a Supabase
│   ├── App.jsx                 Rutas
│   ├── main.jsx                Entry point
│   └── index.css               Estilos globales (tema rosa/claro)
├── index.html
└── package.json
```

## Decisiones de diseño

- **Tema rosa/claro** con acentos rojos (variables CSS en `index.css`)
- **Logo con imagen** (no texto) en el navbar, con height responsivo
- **Lector de cómic en scroll continuo** (estilo manga/webtoon)
- **Grid de capítulos** con portada antes del lector
- **Ficha de personaje** con imagen completa, frase, especie, edad y bio
- **Navbar sticky** que se desliza en el lector de cómic
- **Sin gradientes** (preferencia del autor)

## Estado actual

- ✅ Home, Personajes (grid + ficha), Noticias, Descargas, Donar
- ✅ Cómic: índice de capítulos + lector con selección por URL
- ✅ Página 404, loading/error en todas las páginas
- ✅ Navbar responsive con logo imagen
- ✅ Favicon
- ⏳ Panel de estadísticas
- ⏳ Deploy en Vercel
