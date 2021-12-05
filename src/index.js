const summary = document.querySelectorAll(".summary");
const arrow = document.querySelectorAll(".arrow");
let deg = 0;
let flag = true;
let rotation = 0;
const root = document.documentElement;

summary.forEach((Element, index) => {
  Element.addEventListener("click", (e) => {
    rotation += 180; // add 90 degrees, you can change this as you want
    if (rotation === 360) {
      // 360 means rotate back to 0
      rotation = 0;
    }
    arrow[index].style.transform = `rotate(${rotation}deg)`;
  });
});
