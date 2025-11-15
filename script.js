const btnMenu = document.getElementById("header_hamburguesa");
const navMenu = document.getElementById("header_nav");

btnMenu.addEventListener("click", () => {
  navMenu.classList.toggle("activo");
});

document.addEventListener("DOMContentLoaded", () => {
  const copyIcon = document.querySelector(".copy-icon");
  const emailText = document.querySelector(".email-text");

  copyIcon.addEventListener("click", (e) => {
    e.preventDefault();

    const email = emailText.textContent.trim().replace("content_copy", "").trim();

    navigator.clipboard.writeText(email)
      .then(() => {
        copyIcon.textContent = "check"; // cambia a check
        copyIcon.style.animation = "pop 0.5s ease";

        // vuelve al ícono original luego de un tiempo
        setTimeout(() => {
          copyIcon.textContent = "content_copy";
          copyIcon.style.animation = "";
        }, 1500);
      })
      .catch(err => console.error("Error al copiar el email:", err));
  });
});
