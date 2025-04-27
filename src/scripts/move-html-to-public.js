// scripts/move-html-to-public.js

import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd(); // Ruta base
const publicDir = path.join(projectRoot, 'public');

// Asegúrate que public existe
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

const files = fs.readdirSync(projectRoot);

// Filtra los .html que no sean index.html
const htmlFiles = files.filter(
  (file) => file.endsWith('.html') && file !== 'index.html'
);

for (const file of htmlFiles) {
  const name = path.basename(file, '.html'); // nombre sin .html
  const destDir = path.join(publicDir, name);

  // Crea el directorio destino si no existe
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const sourcePath = path.join(projectRoot, file);
  const destPath = path.join(destDir, 'index.html');

  // Copia el archivo
  fs.copyFileSync(sourcePath, destPath);

  console.log(`✅ Copiado ${file} → public/${name}/index.html`);
}

console.log('✨ ¡Todos los archivos movidos!');
