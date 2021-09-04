let becomeKampot = document.querySelector(".becomeKampot"),
  times = document.getElementById("times");
let clickedTimes = 1;
becomeKampot.addEventListener("dblclick", (e) => {
   createImgKampot(e);
});

// .addEventListener('click', (e) => {
//     if(clickTime === 0) {
//         clickTime = new Date().getTime()
//     } else {
//         if((new Date().getTime() - clickTime) < 800) {
//             createImgKampot(e)
//             clickTime = 0
//         } else {
//             clickTime = new Date().getTime()
//         }
//     }
// })

function createImgKampot(e) {
  const img = document.createElement("img");
  img.src = "https://image.flaticon.com/icons/png/512/2738/2738804.png";
  img.alt = "Kampot";
  img.title = "Kampot";
  img.classList.add("kampot");

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  img.style.left = `${xInside}px`;
  img.style.top = `${yInside}px`;

 becomeKampot.appendChild(img);
  times.innerHTML = clickedTimes++;



  setTimeout(() => img.remove(), 3000);

  
}