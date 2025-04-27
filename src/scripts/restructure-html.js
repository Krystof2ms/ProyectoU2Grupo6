/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

// Directorio de salida de Vite
const distDir = path.join(__dirname, "../../dist");

// Leer todos los archivos HTML en dist
fs.readdir(distDir, (err, files) => {
  if (err) {
    console.error("Error al leer el directorio dist:", err);
    return;
  }

  // Procesar cada archivo HTML excepto index.html
  files.forEach((file) => {
    if (file.endsWith(".html") && file !== "index.html") {
      const fileName = file.replace(".html", "");
      const folderPath = path.join(distDir, fileName);
      const originalFilePath = path.join(distDir, file);
      const newFilePath = path.join(folderPath, "index.html");

      // Crear la carpeta si no existe
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }

      // Copiar el contenido del archivo original al nuevo archivo index.html
      fs.copyFileSync(originalFilePath, newFilePath);

      // Eliminar el archivo original
      fs.unlinkSync(originalFilePath);

      console.log(`Reestructurado: ${file} → ${fileName}/index.html`);
    }
  });
});
