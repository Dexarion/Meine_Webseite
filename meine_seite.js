var burger = document.getElementById("burger");

burger.addEventListener("mouseover", function() {
    let line1 = document.getElementById("burger-line-1");
    let line3 = document.getElementById("burger-line-3");

    line1.style.width = "70%";
    line3.style.width = "80%";
});

burger.addEventListener("mouseout", function() {
    let line1 = document.getElementById("burger-line-1");
    let line3 = document.getElementById("burger-line-3");

    line1.style.width = "100%";
    line3.style.width = "100%";
});