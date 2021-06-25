import Modal from "./modal.js";

const modal = Modal();

// Pegar todos botoes que existem com a classe check e delete
const checkButtons = document.querySelectorAll(".actions a.check");
const deleteButtons = document.querySelectorAll(".actions a.delete");

//Quando botao check ou delete forem clicados, eles abrem a modal
checkButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        // Abrir modal
        modal.open();
    });
});

deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        // Abrir modal
        modal.open();
    });
});
