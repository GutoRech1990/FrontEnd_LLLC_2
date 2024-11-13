function say(text, count) {
    var elem = document.getElementById("output") 
    var i;
    for(i=1; i<= count; i++){
        elem.innerHTML += `I have to say ${text} <br>`
    }
    
}