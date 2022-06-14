function burgirClick() {
    if (document.querySelector(".burgir").id == "burgirOpen") {
        document.querySelector(".burgir").id = "burgirClosed";
        document.getElementById("nav").style.display = "none";
    } else {
        document.querySelector(".burgir").id = "burgirOpen";
        document.getElementById("nav").style.display = "block";
    }
}