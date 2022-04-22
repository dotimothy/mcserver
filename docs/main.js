document.onclick = function() {
     playClick();
}

function playClick() {
     var click = document.getElementById("click");
     click.currentTime = 0;
     click.play();
}

function updateServer() {
    document.body.classList.add('loaded');
    checkServer();
    getDate();
}

function checkServer() {
    var d = new Date();
    var hour = d.getHours();
    var day = d.getDay();
    var status = document.getElementById("status");
    var breaks = false;
    if(((hour >= 21 || hour < 15) ||(day != 6 && day != 0)) && breaks) {
        status.innerHTML = "Server Status: Offline"; 
    } 
    else {
        status.innerHTML = "Server Status: Online";
    }
    setTimeout(checkServer, 1000);
}

function getDate() {
//initial date
    var d = new Date();

    //localizing to PST
    var offset = d.getTimezoneOffset()/60;
    var delPST = offset - 7;
    var hour = d.getHours() + delPST;
    //puts it back if timezone is ahead
    if(hour < 0) {
        hour = hour + 24;
    }

    //minutes and seconds
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var meridiem;

    //formatting to AM/PM
    var time = document.getElementById("time");
    if(minutes < 10) {
        minutes = '0' + minutes;
    }
    if(seconds < 10) {
        seconds = '0' + seconds;
    }
    if(hour < 12) {
        if(hour == 0) {
            hour += 12;
        }
        else if(hour < 10) {
            hour = '0' + hour;
        }
        meridiem = "AM";
    }
    else if(hour >= 12) {
        if(hour != 12) {
            hour -= 12;
            if(hour < 10) {
                hour = '0' + hour;
            }
        }
        meridiem = "PM";
    }

    //updating element
    time.innerHTML = "Local Time: " + hour + ":" +  minutes + ":" + seconds + " " + meridiem + " PST ";
    
    //repeat
    setTimeout(getDate, 1000);}

function clickBedrock() {
    var place = document.getElementById("place");
    var spawn = document.getElementById("spawn");
    place.currentTime = 0;
    place.play();
    spawn.innerHTML += "<img onload=\"classList.add('loaded')\" src='bedrock.png' width='75px'>";
}

function clickJava() {
    var spawn = document.getElementById("spawn");
    var click = document.getElementById("click");
    click.currentTime = 0;
    click.play();
    spawn.innerHTML += "<img onload=\"classList.add('loaded')\" src='java.png' width='75px'>";
}

function copyBedrock() {
    var place = document.getElementById("place");
    place.currentTime = 0;
    place.play();
    var bedrock = document.createElement("textarea");
    document.body.appendChild(bedrock);
    bedrock.value = "dorm.thedocraft.me";
    bedrock.select();
    document.execCommand("copy");
    bedrock.remove();
    alert("Copied Bedrock Link!");
}

function copyJava() {
    var click = document.getElementById("click");
    click.currentTime = 0;
    click.play();
    var java = document.createElement("textarea");
    document.body.appendChild(java);
    java.value = "lab.thedocraft.me:32500";
    java.select();
    document.execCommand("copy");
    java.remove();
    alert("Copied Java Link!");
}

function joinBedrock() {
    var join = document.getElementById("joinbedrock");
    if(join.style.display == "none") {
        join.style.display = "inline-block";
    }
    else {
        join.style.display = "none";
    }
}

