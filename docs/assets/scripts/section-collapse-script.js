const collapseButton = document.getElementsByClassName("section-button");
let i;

for (i = 0; i < collapseButton.length; i++) {
    collapseButton[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const collapseContent = this.nextElementSibling;
        if (collapseContent.style.maxHeight) {
            collapseContent.style.transition = "max-height 0.2s ease, padding 0.2s ease";
            collapseContent.style.padding = null;
            collapseContent.style.maxHeight = null;
        } else {
            collapseContent.style.transition = "max-height 0.2s ease, padding 0s";
            setTimeout(() => {
                collapseContent.style.padding = "18px 18px 0";
            }, 1);
            setTimeout(() => {
                collapseContent.style.maxHeight = collapseContent.scrollHeight + "px";
            }, 2);
        }
    });
}