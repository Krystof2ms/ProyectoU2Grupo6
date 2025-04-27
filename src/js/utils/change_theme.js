function changeColorTheme() {
  // Verificar el estado actual del tema
  const isDark = document.documentElement.classList.contains("dark");

  // Cambiar el tema y actualizar el almacenamiento local
  if (isDark) {
    document.documentElement.classList.remove("dark"); // Remover el tema oscuro
    localStorage.setItem("theme", "light"); // Guardar preferencia de tema en localStorage
    return "light";
  } else {
    document.documentElement.classList.add("dark"); // Aplicar el tema oscuro
    localStorage.setItem("theme", "dark"); // Guardar preferencia de tema en localStorage
    return "dark";
  }
}

// Cargar el tema desde el almacenamiento local al cargar la página
function loadStoredTheme() {
  const savedTheme = localStorage.getItem("theme");

  // Aplicar el tema guardado si existe, o usar el preferido por el sistema
  if (savedTheme) {
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      return "dark";
    } else {
      document.documentElement.classList.remove("dark");
      return "light";
    }
  } else {
    // Si no hay tema guardado, usa la preferencia del sistema (dark o light)
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDarkScheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      return "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      return "light";
    }
  }
}

function changeToggleTheme(changeTheme=changeColorTheme) {
  const theme = changeTheme();
  const themeIcon = document.querySelector("#bt-icon-theme");
  if (theme === "dark") {
    themeIcon.src = "/icons/icon_moon.svg";
  } else {
    themeIcon.src = "/icons/icon_sun.svg";
  }
}

// Llamada a la función que carga el tema preferido desde localStorage al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  changeToggleTheme(loadStoredTheme);
});
