const button = document.querySelector("button");
let count = 0;
button.addEventListener("click", (event) => {
  count++;
  event.target.textContent = count;
});
