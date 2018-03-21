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
        TweenLite.to("body", 1, {backgroundColor: '#93C4E5'});
        document.getElementById('wolk').style.opacity = 1;
        document.getElementById('ster').style.opacity = 0;

    }else {
        TweenLite.to("body", 1, {
            backgroundColor: '#08101B'
        });
        document.getElementById('wolk').style.opacity = 0;
        document.getElementById('ster').style.opacity = 1;
        
        }
}
function wolkjeBewegen(){
    TweenMax.to("#wolk", 10, {
        marginLeft:'100vw', 
        repeat:-1,
        yoyo:true,
        ease: Power1.easeInOut
    })
}
function sterVerdwijnen(){
    TweenMax.to("#ster", 10, {
        x:200,
        y:200,
        scale:3,
        rotation:360,
        marginLeft:'100vw',
        repeat:-1
    })
}
wolkjeBewegen();
geanimeerdeKlok();
changeBackgroundOnTime();
sterVerdwijnen();


