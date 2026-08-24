# landing-booklibre

Sitio estático de portfolio para [BookLibre](https://github.com/LorenGrz/BookLibre) — una plataforma colaborativa de préstamo de libros.

No tiene servidor ni llamadas a API propias. Todo el contenido son capturas reales de la app y texto estático.

## Stack

- Next.js 16 (App Router, `output: 'export'`)
- Tailwind CSS
- TypeScript

## Desarrollo local

```bash
npm install
npm run dev
# http://localhost:3000
```

## Build y deploy

Deploy automático a GitHub Pages vía GitHub Actions en cada push a `master` (ver `.github/workflows/deploy.yml`).

**URL en vivo:** https://lorengrz.github.io/landing-booklibre/

## Proyecto relacionado

- App principal: [LorenGrz/BookLibre](https://github.com/LorenGrz/BookLibre)
