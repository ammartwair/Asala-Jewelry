// script.js
function showMessage() {
    alert("Hello from JavaScript!");
}

window.addEventListener("scroll", function() {
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => {
      const position = el.getBoundingClientRect();
      if (position.top < window.innerHeight && position.bottom >= 0) {
        el.classList.add("visible");
      }
    });
  });
  const openModalBtn = document.querySelector(".open-modal-btn");
  const modal = document.querySelector(".modal");
  const closeModal = document.querySelector(".close");

  openModalBtn.addEventListener("click", function() {
    modal.style.display = "flex";
  });
  
  closeModal.addEventListener("click", function() {
    modal.style.display = "none";
  });
  
  // إغلاق النافذة عند النقر خارج المحتوى
  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
