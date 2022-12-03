/*btn-menu*/

((d) => {
  const $btnMenu = d.querySelector(".menu-btn");
  const $menu = d.querySelector(".menu");
  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });
  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return;
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

/*form*/
(() => {
  const $form = document.querySelector(".contact-form");
  const $inputs = document.querySelectorAll(".contact-form *[required]");

  $inputs.forEach((input) => {
    const $span = document.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });
  document.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      if (
        (e.target.pattern || e.target.dataset.pattern) &&
        e.target.value !== ""
      ) {
        // console.log("el input tiene expresion regular", e.target.pattern);
        let regex = new RegExp(e.target.pattern || e.target.dataset.pattern);

        return !regex.exec(e.target.value)
          ? document.getElementById(e.target.name).classList.add("is-active")
          : document
              .getElementById(e.target.name)
              .classList.remove("is-active");
      }
      if (
        !e.target.pattern &&
        !e.target.dataset.pattern &&
        e.target.value !== ""
      ) {
        // console.log("el input no tiene expresion regular");
        return e.target.value === ""
          ? document.getElementById(e.target.name).classList.add("is-active")
          : document
              .getElementById(e.target.name)
              .classList.remove("is-active");
      }
    }
  });
  document.addEventListener("submit", (e) => {
    // e.preventDefault(); //en este caso hace falta desactivar
    const $loader = document.querySelector(".contact-form-loader");
    const $response = document.querySelector(".contact-form-response");
    $loader.classList.remove("none");
    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset();
      setTimeout(() => $response.classList.add("none"), 3000);
    }, 3000);
  });
})();

/* slider-cliente */
(() => {
  const $sliderClient = document.getElementById("slider-client");
  const start = () => {
    setInterval(() => {
      if (window.innerWidth < 400) {
        if ($sliderClient.scrollLeft > 1800)
          return ($sliderClient.scrollLeft = 0);
        $sliderClient.scrollLeft += 300;
      } else {
        if ($sliderClient.scrollLeft > 1600)
          return ($sliderClient.scrollLeft = 0);
        $sliderClient.scrollLeft += 400;
      }
    }, 3000);
  };
  start();
})();

/* slider-work */
(() => {
  const $sliderWork = document.getElementById("slider-work");
  const start = () => {
    setInterval(() => {
      if (window.innerWidth < 400) {
        if ($sliderWork.scrollLeft > 1400) return ($sliderWork.scrollLeft = 0);
        return ($sliderWork.scrollLeft += 280);
      } else {
        if ($sliderWork.scrollLeft === 1200)
          return ($sliderWork.scrollLeft = 0);
        return ($sliderWork.scrollLeft += 300);
      }
    }, 3000);
  };
  start();
})();
