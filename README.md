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

Todo el texto del CV está en `src/data/cv.ts` (perfil, stack, proyectos, certificaciones…).

## Fondo

Preset **Ice** a velocidad *calm* (0.5), definido en `src/lib/presets.ts`.
Con `prefers-reduced-motion` el fondo se queda quieto. El shader está en
`src/components/ui/shader-animation.tsx`.

## Publicar en GitHub Pages

```bash
./scripts/deploy.sh   # build estático (out/) -> rama gh-pages -> https://byemmanuel.github.io
```
