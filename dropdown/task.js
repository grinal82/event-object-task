const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownLinks = document.querySelectorAll(".dropdown__link");

dropdownValue.addEventListener("click", function () {
    dropdownList.classList.toggle("dropdown__list_active");
});

dropdownLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        dropdownValue.textContent = this.textContent;
        dropdownList.classList.remove("dropdown__list_active");
    });
});
