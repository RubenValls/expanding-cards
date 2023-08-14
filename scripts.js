const images = document.querySelectorAll(".card");

images.forEach((image) => {
    image.addEventListener("click", function () {
        images.forEach((image) => {
            image.classList.remove("active");
        })
        image.classList.add("active");
    });
});
