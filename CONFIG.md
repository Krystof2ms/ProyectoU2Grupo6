# Herramientas y configuración

## Configuración de Tailwind

Asegúrate de que tu `postcss.config.mjs` incluya la configuración necesaria:

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

Y tu `vite.config.js` debe estar configurado correctamente para detectar tus archivos y trabajar con tailwind:

```js
// vite.config.js ejemplo
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
```

## Documentación de Configuración ESLint

Esta documentación detalla la configuración de ESLint utilizada en el proyecto, basada en el archivo `eslint.config.js` que utiliza el formato de configuración plana introducido en ESLint v8.21.0.

## Dependencias

El archivo de configuración importa los siguientes paquetes:

```js
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
```

Para instalar estas dependencias:

```bash
npm install --save-dev eslint @eslint/js eslint-plugin-prettier eslint-config-prettier globals
```

## Archivos Ignorados

La primera sección define los directorios que ESLint debe ignorar completamente:

```js
{
  ignores: ['node_modules/**', 'public/**'],
}
```

## Configuración para Archivos JavaScript

### Archivos Incluidos

```js
files: ["**/*.js"];
```

Esta configuración se aplica a todos los archivos JavaScript en el proyecto.

### Opciones de Lenguaje

```js
languageOptions: {
  ecmaVersion: "latest",
  sourceType: "module",
  globals: {
    ...globals.browser,
    ...globals.node,
    ...globals.es2021
  }
}
```

- `ecmaVersion: "latest"`: Utiliza la versión más reciente de ECMAScript disponible
- `sourceType: "module"`: Considera todos los archivos como módulos ES
- `globals`: Incluye variables globales para entornos de navegador, Node.js y ES2021

### Reglas Personalizadas

```js
rules: {
  'no-console': 'warn',
  'no-unused-vars': [
    "warn",
    {
      "vars": "all",
      "args": "after-used",
      "reportUsedIgnorePattern": true,
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^(handled|on)"
    },
  ],
  'quotes': "off",
  'prefer-const': 'warn',
  'semi': ['warn', 'always']
}
```

#### Detalle de reglas:

1. **`no-console: 'warn'`**  
   Muestra una advertencia cuando se utiliza `console.log()` y métodos similares.
2. **`no-unused-vars`**  
   Muestra advertencias para variables no utilizadas con las siguientes opciones:
   - `vars: "all"`: Comprueba todas las variables
   - `args: "after-used"`: Permite parámetros no utilizados si vienen después de parámetros utilizados
   - `reportUsedIgnorePattern: true`: Informa cuando se usa una variable que coincide con un patrón de ignorar
   - `argsIgnorePattern: "^_"`: Ignora parámetros que comienzan con guion bajo
   - `varsIgnorePattern: "^(handled|on)"`: Ignora variables que comienzan con "handled" o "on"
3. **`quotes: "off"`**  
   Desactiva la regla sobre el estilo de comillas (simples o dobles), permitiendo usar cualquier estilo.
4. **`semi': ['warn', 'always']`**    
    Marca como advertencia la falta de punto y coma al final de cada declaración.
5. **`prefer-const': 'warn'`**  
    Esta regla sugiere usar `const` para las declaraciones de variables que nunca son reasignadas después de su inicializaron


### Plugins

```js
plugins: {
  prettier: eslintPluginPrettier,
}
```

Integra el plugin de Prettier para formatear el código según las reglas de Prettier.

### Opciones del Linter

```js
linterOptions: {
  reportUnusedDisableDirectives: true,
},
```

Informa cuando hay directivas para desactivar reglas (`// eslint-disable-next-line`) que ya no son necesarias.

### Extensiones

```js
extends: [js.configs.recommended],
```

- `js.configs.recommended`: Incluye las reglas recomendadas de ESLint

## Comandos de ejecución sugeridos

Para ejecutar ESLint, añade estos scripts a tu `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

Luego puedes ejecutar:

- `npm run lint` o `pnpm lint` para verificar problemas
- `npm run lint:fix` o `pnpm lint:fix` para corregir automáticamente los problemas que sean posibles
