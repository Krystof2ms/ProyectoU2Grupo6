function changePage(page) {
  if (!page || page.length === 0) {
    return;
  }
  window.location.href = `/${page}`;
}

function goToIndex() {
  window.location.href = '/';  // Redirige a la raíz del sitio
}
