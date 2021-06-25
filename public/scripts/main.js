import Modal from "./modal.js";

const modal = Modal();

// Mapear tags de titulo/ paragrafo/ botao da modal e modifica-los de acordo com acao marcar como lido/excluir
const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal .buttons button");

/*-------------------------------------------------------------------------------*/
// Pegar todos botoes que existem com a classe check e delete
const checkButtons = document.querySelectorAll(".actions a.check");
const deleteButtons = document.querySelectorAll(".actions a.delete");

//Quando botao check ou delete forem clicados, eles abrem a modal e alteram conteudo
checkButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
});

deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => handleClick(event, false));
});

function handleClick(event, check = true) {
    event.preventDefault();
    const text = check ? "Marcar como lida" : "Exluir";

    modalTitle.innerHTML = `${text} esta pergunta`;
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`;
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`;
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red");

    // Abrir modal
    modal.open();
}
