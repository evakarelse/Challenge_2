function geanimeerdeKlok() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById("klok").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(function(){ geanimeerdeKlok() }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function changeBackgroundOnTime(){
    var currentTime = new Date().getHours();

    if(currentTime > 6 && currentTime < 18){
        TweenLite.to("body", 1, {backgroundColor: '#93C4E5'})
    }
}


geanimeerdeKlok();
changeBackgroundOnTime();
