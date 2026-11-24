// Menú móvil
const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

function closeMenu() {
  nav.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menú");
}

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("is-open")) {
    closeMenu();
    menuButton.focus();
  }
});

// Aparición suave de las secciones
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

// Cesta (demo)
const cartCount = document.getElementById("cartCount");
let items = 0;

document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", () => {
    items += 1;
    cartCount.textContent = String(items);
    button.classList.add("added");
    button.innerHTML = 'Añadido a la cesta <span>✓</span>';

    window.setTimeout(() => {
      button.classList.remove("added");
      button.innerHTML = 'Añadir a la cesta <span>+</span>';
    }, 1800);
  });
});

// Formulario de suscripción
const form = document.getElementById("signupForm");
const emailInput = document.getElementById("email");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = emailInput.value.trim();
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

  if (!isValid) {
    emailInput.setAttribute("aria-invalid", "true");
    formMessage.style.color = "#b8321b";
    formMessage.textContent = "Introduce un correo electrónico válido.";
    emailInput.focus();
    return;
  }

  emailInput.removeAttribute("aria-invalid");
  formMessage.style.color = "#2d6a42";
  formMessage.textContent = "¡Listo! Tu código de descuento va en camino.";
  form.reset();
});

emailInput.addEventListener("input", () => {
  emailInput.removeAttribute("aria-invalid");
  formMessage.textContent = "";
});

// Botón para volver arriba
const toTop = document.getElementById("toTop");

function updateToTop() {
  toTop.classList.toggle("is-visible", window.scrollY > 500);
}

window.addEventListener("scroll", updateToTop, { passive: true });
updateToTop();

// Año del pie de página
document.getElementById("year").textContent = String(new Date().getFullYear());
