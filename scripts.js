const images = document.querySelectorAll(".card");
const titles = document.querySelectorAll("h2");

images.forEach((image, index) => {
    image.addEventListener("click", function () {
        images.forEach((image, index) => {
            image.classList.remove("active");
            titles[index].style.visibility = "hidden";
        })
        image.classList.add("active");
        titles[index].style.visibility = "visible";
    });

    if(image.classList.contains("active")){
        titles[index].style.visibility = "visible";
    }
});
