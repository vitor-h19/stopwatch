    function watch(){
        miliseconds++
        
        if (miliseconds == 1000){
            seconds++
            miliseconds = 000
            if(seconds == 60){
                minutes++
                seconds = 00
                if(minutes == 60){
                    hours++
                    minutes = 00
        }}}

        display.innerText=ten(hours)+':'+ten(minutes)+':'+ten(seconds)+':'+hundred(miliseconds)

    }

    function lap(){
        var newLap = document.createElement("article")
        var lapValue = document.createTextNode(lapTime)

        newLap.appendChild(lapValue);

        if(lapTime === '00:00:00:000'){
            alert("Ajuda ai pô, da start que vai dar certo!")
        }else{
            document.getElementById("lapList").appendChild(newLap)
        }
    }

    function hundred(number){
        if(number <= 10){
            return('00' + number)
        } else if(number < 100){
            return('0' + number)
        } else{
            return(number)
        }
    }

    function ten(number){
        if(number < 10){
            return('0' + number)
        }return(number)
    }
    
    var timer
    var lapTime

    var miliseconds = 0
    var seconds = 0
    var minutes = 0
    var hours = 0

    const display = document.getElementById("timer")

    const startButton = document.getElementById("start")
    const pauseButton = document.getElementById("pause")
    const stopButton = document.getElementById("stop")
    const lapButton = document.getElementById("lap")

    startButton.addEventListener('click', () => {
        timer = setInterval(watch,1)
    })

    pauseButton.addEventListener('click', () => {
        clearInterval(timer)
    })

    stopButton.addEventListener('click', () => {
        clearInterval(timer)
        
        miliseconds = 0
        seconds = 0
        minutes = 0
        hours = 0

        display.innerText='00:00:00:000'
    })

    lapButton.addEventListener('click', () => {
        lapTime = display.innerHTML
        lap()
    })