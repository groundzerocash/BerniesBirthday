var imageThumbs = document.getElementById("image-thumbs");
var currentImage = document.getElementById("current-image");
for (var i = 1; i <= 9; i++){
    var thumb = document.createElement("img");
    thumb.src = "image" + i + ".JPG";
    thumb.alt = "image " + i;
    thumb.classList.add("thumb")
    imageThumbs.appendChild(thumb);
    thumb.addEventListener(
        "click", function() {
            currentImage.src = this.src;
            currentImage.alt = this.alt;
        }
    );

}



