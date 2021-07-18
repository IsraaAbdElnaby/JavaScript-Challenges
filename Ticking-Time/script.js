function tickingClock() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();


    document.querySelector("#clock").innerHTML = hours + ':' + minutes + ':' + seconds;
    setInterval(function(){
        tickingClock()
    },
    1000);
}

tickingClock();


