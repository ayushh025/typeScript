// Slider - 1
// select slider container and navigation buttons
let slider = document.querySelector(".slider") as HTMLDivElement;
let next = document.querySelector("#next") as HTMLButtonElement;
let prev = document.querySelector("#prev") as HTMLButtonElement;

// scroll slider to right
next.addEventListener("click", (event: MouseEvent) => {
  slider.scrollBy({
    left: 300,
    behavior: "smooth",
  });
});

// scroll slider to left
prev.addEventListener("click", (event: MouseEvent) => {
  slider.scrollBy({
    left: -300,
    behavior: "smooth",
  });
});

//Slider - 2
// get all images from slider-1
const images = document.querySelectorAll(".img-1") as NodeListOf<HTMLImageElement>;
let imageUrl: string[] = [];

// store image URLs in an array
images.forEach((val) => {
  imageUrl.push(val.src);
});

// select display image
const img2 = document.querySelector("#img-2") as HTMLImageElement;

// set first image initially
img2.src = imageUrl[0];

let idx: number = 0;

// select navigation buttons
let prev2 = document.querySelector("#prev2") as HTMLButtonElement;
let next2 = document.querySelector("#next2") as HTMLButtonElement;

// previous image button
prev2.addEventListener("click", () => {
  idx--;

  // loop to last image if index < 0
  if (idx == -1) idx = imageUrl.length - 1;
  img2.src = imageUrl[idx];
  
  // add animation
  img2.classList.add("animate__animated", "animate__backInLeft");
  
  // remove animation class after animation ends
  setTimeout(() => {
    img2.classList.remove("animate__animated", "animate__backInLeft");
  }, 800);
});

// next image button
next2.addEventListener("click", () => {
  idx++;

  // reset to first image when reaching end
  if (idx == imageUrl.length) idx = 0;
  img2.src = imageUrl[idx];

  // add animation
  img2.classList.add("animate__animated", "animate__backInRight");
  
  // remove animation class after animation ends
  setTimeout(() => {
    img2.classList.remove("animate__animated", "animate__backInRight");
  }, 800);
});

//Slider - 3

const img3 = document.querySelector("#img-3") as HTMLImageElement;
let idxx = 0;

// set initial image
img3.src = imageUrl[idxx];

// auto change image every 2 seconds
setInterval(() => {
  idxx++;

  // loop back to first image
  if (idxx == imageUrl.length) idxx = 0;
  img3.src = imageUrl[idxx];

  // add animation
  img3.classList.add("animate__animated", "animate__backInRight");
  
  // remove animation class after animation ends
  setTimeout(() => {
    img3.classList.remove("animate__animated", "animate__backInRight");
  }, 800);
}, 2000);
