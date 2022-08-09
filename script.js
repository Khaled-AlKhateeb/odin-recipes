const counterContainer = document.querySelector(".website-counter");
let visitCount = localStorage.getItem("page_view");
visitCount = 1;
localStorage.setItem("page_view", 1);
visitCount = Number(visitCount) + 1;
localStorage.setItem("page_view", visitCount);
counterContainer.innerHTML = visitCount + " views";

const botton = document.getElementById("btn");
const trackList = document.getElementById("box");

botton.addEventListener('click', function handleClick() {
    if (box.style.display === "none") {
        box.style.display = "block";

        btn.textContent = "SHOW LESS";
    } else {
        box.style.display = "none";

        btn.textContent = "SHOW MORE";
    }
})