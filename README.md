# Landing PASO

Landing promocional de una marca ficticia de zapatos. Sin dependencias ni pasos de build: es HTML, CSS y JavaScript vanilla.

## Verla

Abre `index.html` en el navegador. Si prefieres servirla localmente:

```bash
python -m http.server 8000
```

Y visita `http://localhost:8000`.

## Archivos

- `index.html`: estructura, textos e ilustraciones SVG reutilizables.
- `styles.css`: diseño responsive, animations y paleta de color.
- `script.js`: menú móvil, animaciones de entrada, cesta de demostración y validación del formulario.

## Personalizar

- **Textos y productos:** edita los bloques de `index.html`.
- **Colores:** cambia las variables en `:root` de `styles.css` y las variables `--upper`, `--sole`, `--accent`, `--lace` y `--detail` de cada `.theme-*`.
- **Imágenes reales:** sustituye los `<svg>` de `.product-media` y `.hero-shoe` por `<img>` con tus fotos.

La cesta y el formulario son demostraciones de interfaz: no envían datos ni realizan compras.
