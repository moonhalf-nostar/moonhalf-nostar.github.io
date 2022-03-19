document.addEventListener("DOMContentLoaded", function(event) {
    // 你的所有代码都应该写在这里
    let targetImages = document.querySelectorAll(".small");
    for (const targetImage of targetImages) {
        targetImage.addEventListener("mouseover", function() {
                targetImage.classList.remove("small");
            }
        )
        targetImage.addEventListener("mouseout", function () {
                targetImage.classList.add("small");
            }
        )
    }
});
