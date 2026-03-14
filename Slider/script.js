// Slider - 1
// select slider container and navigation buttons
var slider = document.querySelector(".slider");
var next = document.querySelector("#next");
var prev = document.querySelector("#prev");
// scroll slider to right
next.addEventListener("click", function (event) {
    slider.scrollBy({
        left: 300,
        behavior: "smooth",
    });
});
// scroll slider to left
prev.addEventListener("click", function (event) {
    slider.scrollBy({
        left: -300,
        behavior: "smooth",
    });
});
//Slider - 2
// get all images from slider-1
var images = document.querySelectorAll(".img-1");
var imageUrl = [];
// store image URLs in an array
images.forEach(function (val) {
    imageUrl.push(val.src);
});
// select display image
var img2 = document.querySelector("#img-2");
// set first image initially
img2.src = imageUrl[0];
var idx = 0;
// select navigation buttons
var prev2 = document.querySelector("#prev2");
var next2 = document.querySelector("#next2");
// previous image button
prev2.addEventListener("click", function () {
    idx--;
    // loop to last image if index < 0
    if (idx == -1)
        idx = imageUrl.length - 1;
    img2.src = imageUrl[idx];
    // add animation
    img2.classList.add("animate__animated", "animate__backInLeft");
    // remove animation class after animation ends
    setTimeout(function () {
        img2.classList.remove("animate__animated", "animate__backInLeft");
    }, 800);
});
// next image button
next2.addEventListener("click", function () {
    idx++;
    // reset to first image when reaching end
    if (idx == imageUrl.length)
        idx = 0;
    img2.src = imageUrl[idx];
    // add animation
    img2.classList.add("animate__animated", "animate__backInRight");
    // remove animation class after animation ends
    setTimeout(function () {
        img2.classList.remove("animate__animated", "animate__backInRight");
    }, 800);
});
//Slider - 3
var img3 = document.querySelector("#img-3");
var idxx = 0;
// set initial image
img3.src = imageUrl[idxx];
// auto change image every 2 seconds
setInterval(function () {
    idxx++;
    // loop back to first image
    if (idxx == imageUrl.length)
        idxx = 0;
    img3.src = imageUrl[idxx];
    // add animation
    img3.classList.add("animate__animated", "animate__backInRight");
    // remove animation class after animation ends
    setTimeout(function () {
        img3.classList.remove("animate__animated", "animate__backInRight");
    }, 800);
}, 2000);
