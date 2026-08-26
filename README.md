# Sebastian Comic Web

Pagina web del comic de Sebastian, un demonio normal viviendo en el inframundo junto a su amigo Julio. Comic animado, comico, con tono adulto.

## Funcionalidades

- Leer el comic online (capitulo por capitulo, con selector de paginas)
- Conocer a los personajes (biografia, edad, imagen)
- Descargar wallpapers e ilustraciones
- Leer noticias y novedades del autor
- Donar via Ko-fi o PayPal

## Stack

- **React + Vite** — frontend
- **React Router DOM** — navegacion entre paginas
- **Supabase** — base de datos (PostgreSQL) + storage de imagenes
- **CSS vanilla** — estilos con custom properties, sin framework
- **Vercel** — hosting y despliegue automatico

## Estructura

```
comic-web-project/
├── src/
│   ├── components/     → Navbar, Footer, Layout, CharacterCard
│   ├── pages/          → Home, Comic, Characters, News, Downloads, Donate
│   ├── lib/            → Conexion Supabase
│   └── index.css       → Estilos globales
├── index.html
└── package.json
```

## Contribuir

1. Fork el repositorio
2. Crea una rama (`git checkout -b mi-feature`)
3. Haz commit (`git commit -m "anyadir feature"`)
4. Push a la rama (`git push origin mi-feature`)
5. Abre un Pull Request

Sigue los pasos de [PLAN.md](../PLAN.md) para entender la arquitectura.
