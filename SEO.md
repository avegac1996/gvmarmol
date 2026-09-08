# SEO — GV MÁRMOL

Guía de posicionamiento del sitio **gvmarmol.com**. Resume lo que ya está
implementado en el código y lo que falta hacer fuera del sitio.

> Reemplaza `https://www.gvmarmol.com/` por el dominio real cuando se contrate.
> Aparece en: `index.html`, `catalogo.html`, `sitemap.xml`, `robots.txt` y este archivo.

---

## 1. Qué ya está implementado en el sitio

| Elemento | Dónde | Estado |
|---|---|---|
| `<title>` únicos y descriptivos por página | `index.html`, `catalogo.html` | ✅ |
| `meta description` (150–160 caracteres) | ambas páginas | ✅ |
| `meta keywords` | ambas páginas | ✅ (peso bajo, informativo) |
| Etiqueta canónica `<link rel="canonical">` | ambas páginas | ✅ |
| Open Graph + Twitter Card (para compartir en redes/WhatsApp) | ambas páginas | ✅ |
| `theme-color` para móvil | ambas páginas | ✅ |
| Favicon SVG | `assets/img/favicon.svg` | ✅ |
| Datos estructurados JSON-LD `HomeAndConstructionBusiness` | `index.html` | ✅ |
| `sitemap.xml` | raíz | ✅ |
| `robots.txt` con referencia al sitemap | raíz | ✅ |
| HTML semántico (`header`, `nav`, `section`, `footer`, encabezados jerárquicos) | todo el sitio | ✅ |
| `alt` en todas las imágenes | todo el sitio | ✅ |
| `lang="es"` | ambas páginas | ✅ |
| Diseño responsive (móvil) | `assets/css/styles.css` | ✅ |
| Enlaces internos entre inicio y catálogo | ambas páginas | ✅ |

---

## 2. Palabras clave objetivo

### Principales (alta intención de compra, locales)
- mármol quito
- granito quito
- mesones de cocina quito / mesón de granito precio
- piedra sinterizada ecuador
- porcelanato gran formato quito
- grano lavado quito
- marmolería quito
- lavabos de mármol
- mesón de baño mármol

### Secundarias / long-tail
- diferencia entre mármol granito y cuarzo
- cuánto cuesta un mesón de cocina de granito
- instalación de mesón de piedra sinterizada
- repulido de mármol / cristalizado de pisos
- gradas de mármol quito
- mejor material para mesón de cocina ecuador

### Marca
- gv mármol / gvmarmol / gustavo vega mármol

---

## 3. Pendiente (fuera del sitio) — prioridad alta

1. **Google Business Profile (Perfil de Empresa en Google)**
   - Crear/reclamar la ficha con el nombre exacto **GV MÁRMOL**.
   - Categoría principal: *Marmolería* / *Proveedor de encimeras*.
   - Categorías secundarias: *Contratista de pisos*, *Tienda de materiales de construcción*.
   - Dirección: Calle Anagaes N52-521, Quito. Teléfono: 098 800 7005 / (02) 241 6481.
   - Horario: Lun–Vie 8:00–17:30, Sáb 8:00–13:00.
   - Subir 15–20 fotos reales: taller, losas, cocinas instaladas, baños, antes/después.
   - Pedir reseñas a clientes cerrados (arquitectos, constructoras). Meta: 20+ con 4.7★.
   - El **NAP** (Nombre, Dirección, Teléfono) debe ser idéntico al del pie de página del sitio.

2. **Dominio y hosting**
   - Registrar `gvmarmol.com` (o `.com.ec`).
   - Servir por **HTTPS** (certificado SSL).
   - Configurar redirección `http → https` y `sin-www → www` (o al revés), una sola versión.

3. **Google Search Console + Bing Webmaster Tools**
   - Verificar el dominio.
   - Enviar `sitemap.xml`.
   - Revisar cobertura e impresiones cada mes.

4. **Google Analytics 4** (o Matomo)
   - Instalar el script antes de `</head>` en ambas páginas.
   - Marcar como conversión los clics a WhatsApp y el envío del formulario.

5. **Directorios locales (citations)** — mismo NAP en todos:
   - Páginas Amarillas Ecuador, Cylex, PuntoGob, Facebook (página de empresa),
     Instagram (bio con enlace), guías de arquitectura/construcción locales.

---

## 4. Contenido recomendado (fase 2)

Crear páginas o entradas de blog para capturar búsquedas informativas:

- «Mármol vs. granito vs. piedra sinterizada: cuál elegir para tu cocina»
- «¿Cuánto cuesta un mesón de cocina en Quito? Guía de precios por metro lineal»
- «Cómo cuidar un mesón de mármol: sellado y limpieza»
- «Grano lavado: usos, ventajas y mantenimiento»
- Página por material (mármol, granito, porcelanato, sinterizada, grano lavado) con
  su propia URL, `title` y `description`.
- Página «Proyectos» con casos reales y fotos (buena para enlaces y para
  la palabra clave «marmolería quito»).

Cada página nueva: agregar su `<loc>` a `sitemap.xml`.

---

## 5. Rendimiento y técnica

- Las imágenes son fotos `.jpg` optimizadas (~20–90 KB c/u) + logotipos SVG.
- Al reemplazarlas por fotos reales de GV MÁRMOL: `.webp` o `.jpg` optimizado,
  con `width`/`height` y `loading="lazy"` (excepto el hero). Nombres de archivo
  descriptivos (`meson-granito-cumbaya.webp`) ayudan al SEO de imágenes.
- Fuentes: se cargan de Google Fonts con `display=swap`. Si se quiere máxima
  velocidad, autoalojar las fuentes.
- Mantener el CSS/JS como está (un solo archivo cada uno, sin dependencias).
- Objetivo Core Web Vitals: LCP < 2.5 s, CLS < 0.1, INP < 200 ms.

---

## 6. Checklist de publicación

- [ ] Dominio real reemplazado en `index.html`, `catalogo.html`, `sitemap.xml`, `robots.txt`.
- [ ] Sitio servido por HTTPS.
- [ ] `sitemap.xml` enviado a Search Console.
- [ ] Google Business Profile publicado y verificado.
- [ ] Analytics instalado con conversiones de WhatsApp y formulario.
- [ ] Fotos reales de trabajos de GV MÁRMOL reemplazando los renders de muestra.
- [ ] 5+ reseñas iniciales en Google.
- [ ] Ficha de Facebook e Instagram enlazando al sitio.
