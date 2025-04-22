export function changeColorTheme() {
  const isDark = document.documentElement.classList.contains("dark");

  if (isDark) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    console.log("changed theme at light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    console.log("changed theme at dark");
  }
}
