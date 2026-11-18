# Portfolio de Isabel Benjumea

Web personal de una sola página (español/inglés, modo claro/oscuro) pensada para publicarse gratis en GitHub Pages y enlazarla desde el CV.

**Publicada en: https://isabelbenjumea.github.io/**

## Qué hay en la carpeta

| Archivo | Para qué sirve |
|---|---|
| `content.js` | **Todos los textos, proyectos y enlaces.** Es el único archivo que hace falta editar. |
| `index.html` | Estructura de la página. |
| `styles.css` | Diseño. Los colores están al principio, en `:root`. |
| `main.js` | Idioma, tema, animaciones. No hace falta tocarlo. |
| `assets/foto.png` | Foto de perfil. |
| `assets/CV_Isabel_Benjumea.pdf` | El CV que se descarga desde la web. |

## Antes de publicar: rellenar dos datos

En `content.js`, dentro de `links`:

```js
githubUser: "su-usuario",                                   // activa los botones "Código" y el enlace a GitHub
linkedin: "https://www.linkedin.com/in/su-perfil",          // activa el botón de LinkedIn
```

Mientras estén vacíos, esos botones no se muestran (así no hay enlaces rotos).

Los botones **Código** de cada proyecto apuntan a `https://github.com/<githubUser>/<repo>`, con el `repo` que tiene cada proyecto en `content.js`. Crea los repositorios con esos nombres (o cambia los nombres en `content.js`). Si un proyecto tiene demo online, pon su URL en `demo` y aparece el botón **Demo**.

## Publicar en GitHub Pages (gratis)

1. Crear una cuenta en [github.com](https://github.com) si no la tiene.
2. Crear un repositorio **público** llamado exactamente `<usuario>.github.io` (por ejemplo `isabenjumea.github.io`).
3. Subir todos los archivos de esta carpeta:
   - Sin instalar nada: en el repositorio, **Add file → Upload files**, arrastrar `index.html`, `styles.css`, `main.js`, `content.js`, `README.md` y la carpeta `assets`, y pulsar **Commit changes**.
   - Con Git, desde esta carpeta:
     ```
     git init
     git add .
     git commit -m "Portfolio"
     git branch -M main
     git remote add origin https://github.com/<usuario>/<usuario>.github.io.git
     git push -u origin main
     ```
4. En el repositorio: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
5. En uno o dos minutos la web está en `https://<usuario>.github.io`. Esa es la URL que va en el CV y en LinkedIn.

Cada vez que se cambie un archivo y se suba al repositorio, la web se actualiza sola en uno o dos minutos.

## Verla en el ordenador antes de subirla

Abrir `index.html` con doble clic funciona en la mayoría de navegadores. Si algo no carga, desde esta carpeta:

```
python -m http.server 8765
```

y abrir `http://localhost:8765`.

## Cambios habituales

- **Cambiar un texto:** buscarlo en `content.js` (hay versión `es` y `en`).
- **Añadir un proyecto:** copiar un bloque de `projects` en `content.js` y cambiar sus datos. `accent` puede ser `rose`, `sage`, `terra` o `sand`.
- **Cambiar la foto:** sustituir `assets/foto.png` por otra cuadrada con el mismo nombre.
- **Actualizar el CV:** sustituir `assets/CV_Isabel_Benjumea.pdf` con el mismo nombre.
- **Cambiar colores:** variables al principio de `styles.css`.
