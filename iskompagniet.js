const now = new Date();
const hour = now.getHours();

if (hour >= 10 && hour < 20) {
  console.log("Butikken er åben");
} else {
  console.log("Butikken er lukket");
}

// Sortiment side //
const iceCards = document.querySelectorAll(".ice");

iceCards.forEach((card) => {
  // klik på hele kortet
  card.addEventListener("click", function () {
    const isAvailable = card.dataset.available === "true";

    if (isAvailable) {
      card.classList.toggle("available");
    } else {
      card.classList.toggle("not-available");
    }
  });

  // klik på pæren
  const bulb = card.querySelector(".bulb");
  const allergy = card.querySelector(".allergy");

  bulb.addEventListener("click", function (event) {
    event.stopPropagation(); // MEGA vigtigt!

    allergy.classList.toggle("hidden");
  });
});

// Kontakt side //
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stopper reload

  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const feedback = document.getElementById("feedback");

  // simpel validering
  if (email === "" || message === "") {
    feedback.textContent = "Udfyld alle felter!";
    feedback.style.color = "red";
    return;
  }

  // succes
  feedback.textContent = "Tak for din besked! 🎉";
  feedback.style.color = "green";

  // reset form
  form.reset();
});
