function showDescription(game) {
  // Descripciones de los juegos en español
  const descriptions = {
    "aro-de-fuego":
      "🔥 ¡Atrévete a cruzar el Aro de Fuego! Una experiencia llena de adrenalina, saltos y emoción, diseñada para los más valientes.",
    "montana-rusa":
      "🎢 Disfruta la velocidad y los giros extremos en nuestra Montaña Rusa, con caídas de vértigo y curvas inesperadas. ¡Una aventura inolvidable!",
    "botes-chocones":
      "🚤 Ríe y choca sin parar en nuestros Botes Chocones acuáticos. ¡Diversión garantizada mientras navegas y esquivas a tus amigos!",
    "juegos-inflables":
      "🎈 Los pequeños se divertirán a lo grande en nuestros Juegos Inflables gigantes. Saltos, carreras y obstáculos coloridos para toda la familia.",
  };

  // Obtener el elemento donde se mostrará la descripción
  const descriptionElement = document.getElementById("description");

  // Actualizar el texto de la descripción con el valor correspondiente
  descriptionElement.innerText = descriptions[game];

  // Buscar el botón que fue presionado para activar esta función
  const button = document.querySelector(
    `button[onclick="showDescription('${game}')"]`
  );

  if (button) {
    // Mover la descripción justo después del botón presionado
    button.insertAdjacentElement("afterend", descriptionElement);

    // Añadir animación para mostrar la descripción
    descriptionElement.style.display = "block";
    descriptionElement.style.opacity = 0; // Comienza invisible
    descriptionElement.style.transform = "translateY(-10px)"; // Un poco arriba
    setTimeout(() => {
      descriptionElement.style.transition = "all 0.5s ease";
      descriptionElement.style.opacity = 1; // Hacerla visible
      descriptionElement.style.transform = "translateY(0)"; // Volver a su posición original
    }, 10);
  }
}
