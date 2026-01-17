// ===== WELCOME NAME =====
const userNameElement = document.getElementById("userName");
const inputName = prompt("Enter your name");

if (inputName) {
  userNameElement.textContent = inputName;
}

// ===== PHONE NUMBER: ONLY DIGITS =====
const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});

// ===== FORM VALIDATION =====
const form = document.getElementById("contactForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = phoneInput.value.trim();
  const message = document.getElementById("messageText").value.trim();

  if (!name || !email || !phone || !message) {
    alert("Please fill in all fields.");
    return;
  }

  result.innerHTML = `
    <h3>Submitted Data</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
});
