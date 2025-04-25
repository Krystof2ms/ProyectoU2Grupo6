function loadHeader() {
  const header = document.querySelector("#main-header");

  header.innerHTML = `
    <img
      class="logo-main"
      src="/logos/logo_la_huaycha.png"
      alt="logo La Huaycha"
    />
    <div class="flex flex-row gap-10">
      <button
        class="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-full"
        id="theme-toggle"
        onclick="changeToggleTheme()"
      >
        <img
          src="/icons/icon_sun.svg"
          alt="icon sun"
          id="icon-theme"
          class="stroke-black w-5 h-5"
        />
        <p>Cambiar tema</p>
      </button>
      <div
        class="flex flex-row gap-4 justify-around p-3 px-6 bg-gray-300 rounded-full"
      >
        <button class="hover:underline font-medium" onclick="goToIndex()">
          Inicio
        </button>
        <button class="hover:underline font-medium" onclick="changePage('juegos')">Juegos</button>
        <button
          class="hover:underline font-medium"
          onclick="changePage('pre-ventas')"
        >
          Pre-venta
        </button>
        <button 
        class="hover:underline font-medium"
        onclick="changePage('acerca-de')"
        >Acerca de</button>
      </div>
    </div>
  `;
}

function loadFooter() {
  const footer = document.querySelector("#main-footer");

  footer.innerHTML = `
    <div class="flex flex-row justify-around gap-4 p-1">
        <div class="flex flex-col items-start w-70">
          <img
            class="bg-gray-100 rounded-2xl"
            src="/logos/logo_la_huaycha.png"
            alt="logo La Huaycha"
          />
          <p class="text-justify text-sm">
            Disfruta la emoción al máximo en nuestros juegos al aire libre, con
            atracciones de última generación y procesos tecnificados que
            garantizan seguridad, diversión y una experiencia inolvidable para
            toda la familia
          </p>
        </div>
        <div>
          <strong class="text-xl">Abrimos de:</strong>
          <p class="text-base">Lunes - Viernes:</p>
          <p class="text-base">8am-6pm</p>
          <p class="text-base">Sábado - Domingo:</p>
          <p class="text-base">8am-10pm</p>
        </div>
        <div>
          <strong class="w-[14rem] text-xl">Contáctenos</strong>
          <p>912 859 606</p>
          <p>polbasurto@hotmail.com</p>
          <p class="w-[14rem]">Km 14 ,Mito-Concepción, Concepción, Peru</p>
        </div>
        <div class="flex flex-col items-center justify-center gap-4">
          <strong class="w-[14rem] text-xl"
            >Visítenos en nuestras Redes Sociales:</strong
          >
          <div class="flex flex-row gap-5">
            <a
              href="https://www.facebook.com/la.huaycha.huancayo.recreo/"
              target="_blank"
            >
              <img
                class="w-10 h-10"
                src="/icons/icon_facebook.svg"
                alt="icon facebook"
              />
            </a>
            <a href="https://www.instagram.com/la.huaycha/" target="_blank">
              <img
                class="w-10 h-10"
                src="/icons/icon_instagram.svg"
                alt="icon instagram"
              />
            </a>
            <a href="https://www.tiktok.com/@lahuaychaoficial" target="_blank">
              <img
                class="w-10 h-10"
                src="/icons/icon_tiktok.svg"
                alt="icon tiktok"
              />
            </a>
            <a href="https://wa.me/912859606">
              <img
                class="w-10 h-10"
                src="/icons/icon_whatsapp.svg"
                alt="icon WhatsApp"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center gap-1 p-2">
        <p
          class="font-bold underline hover:text-red-900 transition-colors duration-300"
        >
          © Desarrollado por el grupo 6
        </p>
        <button
          class="bg-gray-500 rounded-full p-2 text-white font-bold hover:bg-gray-900"
          onclick="changePage('nuestro-equipo')"
        >
          Conócenos
        </button>
      </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadFooter();
});
