// Get the modal and button elements for each modal
const modals = [
    { modal: document.getElementById("modal1"), button: document.getElementById("modal-btn-1") },
    { modal: document.getElementById("modal2"), button: document.getElementById("modal-btn-2") },
    { modal: document.getElementById("modal3"), button: document.getElementById("modal-btn-3") },
    { modal: document.getElementById("modal4"), button: document.getElementById("modal-btn-4") },
    { modal: document.getElementById("modal5"), button: document.getElementById("modal-btn-5") },
];

// Add event listeners to each button
modals.forEach(function (modal) {
    modal.button.addEventListener("click", function () {
        modal.modal.style.display = "block";
    });
});

// Add event listeners to each close button
const closeButtons = document.querySelectorAll(".close");
closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const modal = button.parentNode.parentNode;
        modal.style.display = "none";
    });
});

// Close the modals when the user clicks outside of them
window.addEventListener("click", function (event) {
    modals.forEach(function (modal) {
        if (event.target === modal.modal) {
            modal.modal.style.display = "none";
        }
    });
});

const spotlight = document.createElement('div');
spotlight.classList.add('spotlight');
document.body.appendChild(spotlight);

window.addEventListener('mousemove', (e) => {
  spotlight.style.left = e.pageX + 'px';
  spotlight.style.top = e.pageY + 'px';

  const hiddenText = document.querySelector('.hidden-text');
  if (hiddenText) {
    const rect = hiddenText.getBoundingClientRect();
    const x = e.pageX - rect.left;
    const y = e.pageY - rect.top;
    hiddenText.style.opacity = 1;
    hiddenText.style.clipPath = `circle(60px at ${x}px ${y}px)`;
  }
});