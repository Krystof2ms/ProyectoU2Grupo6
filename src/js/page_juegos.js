function mostrarDescripcion(juego) {
  const descripciones = {
      "aro-de-fuego": "🔥 ¡Atrévete a cruzar el Aro de Fuego! Una experiencia llena de adrenalina, saltos y emoción, diseñada para los más valientes.",
      "montana-rusa": "🎢 Disfruta la velocidad y los giros extremos en nuestra Montaña Rusa, con caídas de vértigo y curvas inesperadas. ¡Una aventura inolvidable!",
      "botes-chocones": "🚤 Ríe y choca sin parar en nuestros Botes Chocones acuáticos. ¡Diversión garantizada mientras navegas y esquivas a tus amigos!",
      "juegos-inflables": "🎈 Los pequeños se divertirán a lo grande en nuestros Juegos Inflables gigantes. Saltos, carreras y obstáculos coloridos para toda la familia."
  };

  const descripcionElemento = document.getElementById("descripcion");

  // Actualizar el texto de la descripción
  descripcionElemento.innerText = descripciones[juego];

  // Buscar el botón presionado
  const boton = document.querySelector(`button[onclick="mostrarDescripcion('${juego}')"]`);

  if (boton) {
      // Mover la descripción justo después del botón
      boton.insertAdjacentElement('afterend', descripcionElemento);

      // Añadir animación
      descripcionElemento.style.display = 'block';
      descripcionElemento.style.opacity = 0; // Empezar invisible
      descripcionElemento.style.transform = 'translateY(-10px)'; // Un poco arriba
      setTimeout(() => {
          descripcionElemento.style.transition = 'all 0.5s ease';
          descripcionElemento.style.opacity = 1;
          descripcionElemento.style.transform = 'translateY(0)';
      }, 10);
  }
}
