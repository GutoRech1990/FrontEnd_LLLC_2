function startAnimation(){
    $("#inner-container").animate({"margin-left": "-200px"}, 3000, goBack);
}

function goBack(){
    $("#inner-container").animate({"margin-left": "0px"}, 3000);
}