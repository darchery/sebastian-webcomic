# Sebastián Comic Web

Página web del cómic de **Sebastián**, un demonio normal viviendo en el inframundo junto a su amigo Julio. Cómic animado, cómico y con tono adulto.

## Funcionalidades

- **Leer el cómic online** — capítulo a capítulo, con páginas apiladas con scroll continuo
- **Conocer a los personajes** — tarjetas con biografía, edad e imagen, con bio desplegable al hacer clic
- **Descargar wallpapers e ilustraciones** — las imágenes se descargan en PNG automáticamente
- **Leer noticias y novedades del autor** — feed de novedades desde Supabase
- **Donar vía Ko-fi o PayPal**

## Stack

- **React + Vite** — frontend
- **React Router DOM** — navegación entre páginas
- **Supabase** — base de datos (PostgreSQL) + storage de imágenes
- **CSS vanilla** — estilos con custom properties, sin framework
- **Vercel** — hosting y despliegue automático

## Estructura

```
comic-web-project/
├── src/
│   ├── components/     Navbar, Footer, Layout, CharacterCard, DonationLink
│   ├── pages/          Home, Comic, Characters, News, Downloads, Donate
│   ├── lib/            Conexión Supabase
│   └── index.css       Estilos globales (tema rosa/claro)
├── index.html
└── package.json
```

## Decisiones de diseño

- **Tema rosa/claro** con acentos rojos (variables en `index.css`)
- **Lector de cómic en scroll continuo** (estilo manga/webtoon) en lugar de visor página a página
- **Página de personajes en grid** (4 columnas en escritorio, apiladas en móvil) con bio desplegable
- **Navbar adaptado a la página Comic** (se desliza y no queda fijo en el lector)

## Estado actual

- ✅ Home, Personajes, Noticias, Descargas, Donar
- ⏳ Cómic (lector manga) — en desarrollo
- 🔧 Pendientes: página de Ko-fi y paypal del artista

## Contribuir

1. Fork el repositorio
2. Crea una rama (`git checkout -b mi-feature`)
3. Haz commit (`git commit -m "añadir feature"`)
4. Push a la rama (`git push origin mi-feature`)
5. Abre un Pull Request
