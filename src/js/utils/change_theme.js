function changeColorTheme() {
  const isDark = document.documentElement.classList.contains("dark");

  if (isDark) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    console.log("changed theme at light");
    return "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    console.log("changed theme at dark");
    return "dark";
  }
}

function changeToggleTheme() {
  const theme = changeColorTheme();
  const themeIcon = document.querySelector("#icon-theme");
  if (theme === "dark") {
    themeIcon.src = "/icons/icon_moon.svg";
  } else {
    themeIcon.src = "/icons/icon_sun.svg";
  }
}

/*
document.addEventListener("DOMContentLoaded", () => {
  const buttonThemeToggle = document.querySelector("#theme-toggle");

  buttonThemeToggle.addEventListener("click", () => {
    console.log("Theme toggle button clicked");
    changeToggleTheme();
  });
});
*/
