var images = ["cat.png", "pumpkin.png", "zombie.png", "ghost.png"];

var current = 0;

function startAnimation(){
    $("#inner-container").animate({"margin-left": "-200px"}, 2000, changeImage);
}

function changeImage(){
    current = (current + 1) % images.length;
    $("#img1").attr("src", "images/" + images[current]);
    $("#inner-container").css("margin-left", "0px")

    next = (current + 1)  % images.length;

    $("#img2").attr("src", "images/" + images[next]);

    setTimeout("startAnimation()", 3000)

}