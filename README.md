# GV MÁRMOL — Sitio web + catálogo

Sitio estático (HTML/CSS/JS, sin dependencias ni build) para **GV MÁRMOL**,
marmolería de Quito, Ecuador. Estilo editorial: negro cálido, hueso y bronce apagado.

## Estructura

```
gvmarmol/
├── index.html            Página principal (hero + 4 secciones + contacto)
├── catalogo.html         Catálogo interactivo tipo libro (page-flip 3D)
├── robots.txt · sitemap.xml   SEO
├── SEO.md                 Guía de posicionamiento
└── assets/
    ├── css/styles.css     Estilos (paleta en :root)
    ├── js/main.js          Interacciones de index.html
    ├── js/catalog.js       Motor del catálogo tipo libro
    └── img/                Fotos realistas + logotipos SVG
```

## Cómo verlo

Abrir `index.html` en el navegador, o servir:

```bash
python -m http.server 8000   # http://localhost:8000
```

## Secciones de la página

1. **Portada tipo libro** — al entrar aparece la tapa con el logo; al tocarla se abre
   como un libro y revela el sitio (una vez por sesión; `index.html?nointro` la omite).
2. **Hero** — foto a sangre + frase de marca + botón «Ver catálogo».
3. **01 · La casa** — GV MÁRMOL + lista de servicios + bloque **CEO / Fundador**
   (Gustavo Vega, Fundador y Director — clase `.founder`).
4. **Banda** — foto a sangre con frase.
5. **02 · Colección** — 10 superficies (fotos reales) → clic abre WhatsApp con el material.
6. **03 · Proyectos** — grilla editorial de 9 trabajos.
7. **Ambientes** — galería de 3 imágenes.
8. **04 · Grano lavado** — pisos continuos para exteriores: piscinas, terrazas,
   fachadas, gradas de acceso y **rampas accesibles**. La imagen es una textura;
   reemplazar por fotos reales de obras.
9. **05 · Proceso** — 4 pasos + condiciones (7 días, 70/30, por metro lineal).
10. **Contacto** — formulario que arma un mensaje y abre WhatsApp.

Menú: **Colección · Proyectos · Contacto** (3 ítems). El catálogo se abre solo
desde el botón flotante. Botones flotantes: Catálogo + WhatsApp.

## Logo

Vectorial (`logo*.svg`, `emblem-light.svg`, `favicon.svg`): óvalo **azul** (elipse
simétrica) con **GV** en serif plata + gema. "GV MÁRMOL" como wordmark.
Regenerable con el script del historial; colores en `:root` / dentro de cada SVG.

## Catálogo (`catalogo.html`)

Libro de ~19 páginas que se voltean en 3D. Navegación: flechas del teclado, clic en
los bordes o swipe. `catalogo.html#p5` abre en una página concreta. Cada material tiene
botón «Pedir precio por WhatsApp».

## Imágenes

- `k-*.jpg`, `p-*.jpg`, `foto-cocina-*.jpg` — escenas reales (hero, banda, proyectos,
  ambientes, divisores del catálogo).
- `card-*.jpg` — 10 superficies con nombre y muestra (sección Colección y catálogo).
- `grano-lavado.svg` — **textura** de árido lavado (única imagen no fotográfica).
  **Pendiente:** fotos reales de grano lavado en piscinas / terrazas / fachadas /
  gradas de entrada / rampas para silla de ruedas — enviarlas y se reemplazan.
- Logotipos: `logo*.svg`, `emblem-light.svg`, `favicon.svg`.

## Personalización

| Qué | Dónde |
|---|---|
| WhatsApp | `WA` en `assets/js/*.js` y enlaces `wa.me` del HTML |
| Colores de marca | variables `:root` en `assets/css/styles.css` |
| Materiales del catálogo | array `PAGES` en `assets/js/catalog.js` |
| Textos / proyectos | `index.html` |
| Dominio (SEO) | ver `SEO.md` |

## Datos de la empresa

GV MÁRMOL — Gustavo Vega · WhatsApp 098 800 7005 (`+593988007005`) ·
(02) 241 6481 · gvmarmol@hotmail.com · Calle Anagaes N52-521, Quito ·
RUC 1712721255001 · Entrega ~7 días · Pago 70/30.
