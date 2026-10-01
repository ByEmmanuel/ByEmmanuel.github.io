# CV Web · Jesús Emmanuel García

CV en formato web (Next.js + TypeScript + Tailwind + shadcn/ui) con fondo animado
*light-ripple* (shader de Three.js, ver `SKILL.md`).

## Correr

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Editar el contenido

Todo el texto del CV está en `src/data/cv.ts`, en español e inglés (`{ es, en }`).
`/` es la versión en español y `/en/` la versión en inglés.

## Galerías de proyectos

Cada proyecto puede tener de 1 a 4 capturas en `public/proyectos/<slug>/` y listarlas
en el campo `images` del proyecto en `cv.ts`. Para convertir una captura:

```bash
magick captura.png -strip -quality 78 public/proyectos/<slug>/1.webp
```

## Barra superior

Siempre visible, con navegación por secciones, **Imágenes Sí/No**, **Detalle Completo/Breve**
e idioma **ES/EN**. Las preferencias se guardan en el navegador (`src/lib/prefs.ts`).
La página también tiene estilos de impresión (Ctrl+P genera un CV limpio en blanco).

## Fondo

Preset **Ice** a velocidad *calm* (0.5), definido en `src/lib/presets.ts`.
Con `prefers-reduced-motion` el fondo se queda quieto. El shader está en
`src/components/ui/shader-animation.tsx`.

## Publicar en GitHub Pages

```bash
./scripts/deploy.sh   # build estático (out/) -> rama gh-pages -> https://byemmanuel.github.io
```
