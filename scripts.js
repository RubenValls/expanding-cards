const images = document.querySelectorAll(".card");
const titles = document.querySelectorAll("h2");

images.forEach((image, index) => {
    image.addEventListener("click", function () {
        images.forEach((image, index) => {
            image.classList.remove("active");
            titles[index].style.visibility = "hidden";
        })
        image.classList.add("active");
        titles[index].style.transition = "opacity 1s";
        setTimeout(() => {
            titles[index].style.visibility = "visible";
            titles[index].style.opacity = 1;
        }, "1000");
    });

    if(image.classList.contains("active")){
        titles[index].style.opacity = 1;
        titles[index].style.visibility = "visible";
    }
});
