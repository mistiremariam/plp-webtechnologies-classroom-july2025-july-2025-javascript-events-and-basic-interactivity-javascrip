// =======================
// Part 1: Event Handling
// =======================
const messageBtn = document.getElementById("messageBtn");
const message = document.getElementById("message");

messageBtn.addEventListener("click", () => {
  message.textContent = "You clicked the button!";
});

// =======================
// Part 2: Interactive Elements
// =======================

// Light/Dark Mode
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
const counter = document.getElementById("counter");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});

// FAQ Toggle
const faqToggle = document.querySelector(".faq-toggle");
const faqAnswer = document.querySelector(".faq-answer");
faqToggle.addEventListener("click", () => {
  faqAnswer.style.display = faqAnswer.style.display === "block" ? "none" : "block";
});

// =======================
// Part 3: Form Validation
// =======================
const form = document.getElementById("signupForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload
  let isValid = true;

  // Reset errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // Name validation
  if (nameField.value.trim() === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Email validation (basic regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailField.value.trim())) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  }

  // Password validation
  if (passwordField.value.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // Success message
  if (isValid) {
    document.getElementById("formSuccess").textContent = "Form submitted successfully! 🎉";
    form.reset();
  }
});
