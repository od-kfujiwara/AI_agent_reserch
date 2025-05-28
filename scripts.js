const navButtons = document.querySelectorAll(".nav-button");
const contentSections = document.querySelectorAll(".content-section");

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    contentSections.forEach(section => section.classList.add("hidden"));
    const targetSection = document.getElementById(button.dataset.section);
    if (targetSection && button.dataset.section !== "outlook" && button.dataset.section !== "conclusion") {
      targetSection.classList.remove("hidden");
    }
  });
});