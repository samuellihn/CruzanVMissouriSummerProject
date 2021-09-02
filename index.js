if (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
    let observer = new IntersectionObserver(entries => {
        if (entries[0].boundingClientRect.y < 0) {
            document.getElementById("navbar").hidden = false
        } else {
            document.getElementById("navbar").hidden = true
        }
    });
    observer.observe(document.querySelector("#top-of-site-pixel-anchor"));


}

let collapse = document.getElementsByClassName("collapsible");
console.log(collapse)
let i;

for (i = 0; i < collapse.length; i++) {
    collapse[i].onclick = function () {
        this.classList.toggle("expanded");
        this.classList.toggle("collapsible");
        let content = this.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    }
}
