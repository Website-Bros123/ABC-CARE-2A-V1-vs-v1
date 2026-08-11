// A Better Childcare 2A
// Small front-end interactions. Firebase Hosting can serve this project as-is.

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Contact form: opens the visitor's email app with the form information.
// Replace this with Firebase/Firestore or another form service later if desired.
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);

  const name = formData.get("name") || "";
  const phone = formData.get("phone") || "";
  const email = formData.get("email") || "";
  const reason = formData.get("reason") || "";
  const message = formData.get("message") || "";

  const subject = encodeURIComponent(`Website Inquiry - ${reason}`);
  const body = encodeURIComponent(
`Hello A Better Childcare 2A,

I am contacting you through your website.

Name: ${name}
Phone: ${phone}
Email: ${email}
Reason: ${reason}

Message:
${message}

Thank you!`
  );

  window.location.href =
    `mailto:yaelabccare@outlook.com?subject=${subject}&body=${body}`;

  formMessage.textContent = "Your email app should open with your request ready to send.";
});

// Current year in footer.
document.getElementById("year").textContent = new Date().getFullYear();
