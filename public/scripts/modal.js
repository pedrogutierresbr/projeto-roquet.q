export default function Modal() {
    const modalWrapper = document.querySelector(".modal-wrapper");
    const cancelButton = document.querySelector(".button.cancel");

    cancelButton.addEventListener("click", close);

    function open() {
        // atibui classe active para modal
        modalWrapper.classList.add("active");
    }

    function close() {
        // retira classe active para modal
        modalWrapper.classList.remove("active");
    }

    return {
        open,
        close,
    };
}
