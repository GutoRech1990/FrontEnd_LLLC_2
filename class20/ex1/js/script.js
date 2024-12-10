function hidePar(){
    let items = $("p");
    items.hide(1000);
}

function showPar(){
    $("p").show(1000);
}

function togglePar(){
    $("p").fadeToggle(2000);
}

function toggleOne(){
    $(".one").toggle();
}

function changeColor(){
    let currentColor = $(".one").css("color");

    alert(currentColor);

    $(".one").css({
        "background-color": "red",
        "font-weight": "bolder"
     });
    
}

function changeButton(){
    $("#first").attr('value', 'Hello World');
}
