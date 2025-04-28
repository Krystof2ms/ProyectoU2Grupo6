# Proyecto Grupo 6

Este proyecto utiliza Tailwind CSS con soporte para modo oscuro implementado mediante variantes personalizadas, usando vite.

## Estructura de Archivos

```
├── index.html --- primer archivo html las demas paginas en el mismo nivel
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── public --- para guardar recursos colo imágenes, logos, etc
│   └── ....
├── README.md
├── src
│   ├── css --- estilos page_[nombre de la pagina].css
│   │   └── globals.css --- estilos generales
│   └── js --- lógica de javascript page_[nombre de la pagina].js
│       └── utils --- lógica general que se puede reutilizar
│           └── change_theme.js
└── vite.config.js
```

## Instalación

### Usando npm

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

### Usando pnpm

```bash
# Instalar dependencias
pnpm install

# Ejecutar en modo desarrollo
pnpm dev

# Construir para producción
pnpm build
```
## Configuración
Las especificaciones de la configuración están en:  
[CONFIG.md](./CONFIG.md)

## Estructura de archivos

### Archivo `globals.css y .css en general`

El archivo `src/css/globals.css` es el punto central para los estilos globales y debe contener:

```css
@import "tailwindcss";

/* Definición de la variante personalizada para dark mode */
@custom-variant dark (&:where(.dark, .dark *));
```

Esta configuración permite utilizar el prefijo `dark:` en cualquier clase de Tailwind, que se aplicará cuando el elemento o su padre tenga la clase `.dark` y lo deben tener todos los archivos .css.

### Implementación del Modo Oscuro

Para activar el modo oscuro, añade la clase `.dark` al elemento `html` o `body`:

```js
// Activar modo oscuro
document.documentElement.classList.add("dark");

// Desactivar modo oscuro
document.documentElement.classList.remove("dark");

// Alternar modo oscuro
document.documentElement.classList.toggle("dark");
```

O usar la función `changeColorTheme()` de `src/js/utils/change_theme.js` que ya cambia automáticamente entre los dos modos

### Uso de Clases Dark Mode

En html:

```html
<div class="bg-white text-black dark:bg-gray-800 dark:text-white">
  Este elemento tendrá fondo blanco y texto negro en modo claro, y fondo gris
  oscuro con texto blanco en modo oscuro mediante "dark:".
</div>
```

En css **mediante la directiva @apply** dentro de clases o etiquetas:

```css
@apply bg-white text-black dark:bg-gray-800 dark:text-white;
```

### Archivo `index.html` y `.html`

Todos deben tener:

```html
<html lang="es">
  <!--Para que se carguen correctamente los textos en español-->
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./src/css/globals.css" />
    <!-- Para cargar el globals.css-->
  </head>
</html>
```

# Scripts del Proyecto

Este proyecto utiliza [Vite](https://vitejs.dev/) como herramienta de desarrollo y construcción, junto con [ESLint](https://eslint.org/) para análisis de código.

## 📜 Scripts disponibles

Puedes ejecutar estos comandos con `npm`, `pnpm` o `yarn` según el gestor de paquetes que uses.

---

### 🔧 `dev`

```bash
npm run dev
```
Ejecuta el servidor de desarrollo de Vite y abre automáticamente el navegador en la URL local (por defecto, http://localhost:5173).

### 🏗️ `build`
```bash
npm run build
```
Genera una versión optimizada y lista para producción en la carpeta `dist`.

### 👀 `preview`
```bash
npm run preview
```
Sirve localmente la carpeta dist para previsualizar el sitio exactamente como se vería en producción.

### 🧹 `lint`
```bash
npm run lint
```
Ejecuta ESLint en todo el proyecto para mostrar errores y advertencias de estilo o buenas prácticas en tu código JavaScript.

### 🛠️ `lint:fix`
```bash
npm run lint:fix
```
Igual que el anterior, pero además intenta corregir automáticamente los problemas detectados por ESLint.

## Notas Importantes

- La definición `@custom-variant dark` permite el uso del selector de modo oscuro en todos tus archivos CSS sin importarla en cada uno.
- Vite es una herramienta de desarrollo web moderna que ofrece un entorno rápido y optimizado tanto para desarrollo como para producción.

  - ⚙️ Soporta herramientas modernas como Tailwind CSS, PostCSS, Sass, TypeScript, etc.
  - 🧠 Ideal para proyectos con JavaScript puro, Vue, React, Svelte, etc.
  - ✅ Vite reemplaza a herramientas más lentas como Webpack, haciendo el desarrollo web más ágil y simple.

- Tailwind CSS es un framework de CSS utilitario que permite construir interfaces modernas sin escribir CSS personalizado.
  - 🧱 Usa clases como flex, pt-4, text-center, etc. para diseñar directamente en el HTML.
  - ⚡ Rápido de escribir, fácil de mantener.
  - 🌙 Soporte nativo para modo oscuro.
  - ✅ Permite desarrollar interfaces limpias y responsivas directamente con clases, sin necesidad de crear hojas de estilos complicadas.
