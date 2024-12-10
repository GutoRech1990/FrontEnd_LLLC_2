var images = ["cat.png", "pumpkin.png", "zombie.png", "ghost.png"];

var current = 0;
rep = null; 

function startAnimation(){
    $("#inner-container").animate({"margin-left": "-200px"}, 2000, changeImage);
}

function changeImage(){
    current = (current + 1) % images.length;
    $("#img1").attr("src", "images/" + images[current]);
    $("#inner-container").css("margin-left", "0px")

    next = (current + 1)  % images.length;

    $("#img2").attr("src", "images/" + images[next]);

    rep = setTimeout("startAnimation()", 3000)
}

function nextImage(){
    console.log("Stopping");
    $("#inner-container").stop();
    clearTimeout(rep);
    current = (current + 1) % images.length;
    $("#inner-container").css("margin-left", "0px");
    
    $("#img1").attr("src", "images/" + images[current]);
    $("#inner-container").css("margin-left", "0px")

    next = (current + 1)  % images.length;

    $("#img2").attr("src", "images/" + images[next]);
    rep = setTimeout("startAnimation()", 3000);
    
}


function previous(){
    console.log("Stopping");
    $("#inner-container").stop();
    clearTimeout(rep);
    current = (current - 1 + images.length)  % images.length;
    $("#inner-container").css("margin-left", "0px");
    
    $("#img1").attr("src", "images/" + images[current]);
    $("#inner-container").css("margin-left", "0px")

    next = (current + 1)  % images.length;

    $("#img2").attr("src", "images/" + images[next]);
    rep = setTimeout("startAnimation()", 3000);
    
}