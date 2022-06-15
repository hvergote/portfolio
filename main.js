function burgirClick() {
// check if screen is 768px or less
    if (window.innerWidth <= 768) {
        if (document.querySelector(".burgir").id == "burgirOpen") {
            document.querySelector(".burgir").id = "burgirClosed";
            document.getElementById("nav").style.display = "none";
        } else {
            document.querySelector(".burgir").id = "burgirOpen";
            document.getElementById("nav").style.display = "block";
        }
    }
}