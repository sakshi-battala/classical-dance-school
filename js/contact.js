const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  successMessage.textContent = "Thank you! We'll get back to you soon.";

  successMessage.style.display = "flex";

  form.reset();
});
