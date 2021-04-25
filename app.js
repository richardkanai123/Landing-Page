// elements

const Displaypic = document.querySelector('#Dpic');
const Hours = document.querySelector('#hrs');
const Minutes = document.querySelector('#min');
const Seconds = document.querySelector('#sec');
const AmPM = document.querySelector('#ampm');
const TOD = document.querySelector('#TimeofDay');
const DayDate = document.querySelector('.date');
const Fulldate=document.querySelector('.month');
const Aim = document.querySelector("#Aim");
const User = document.querySelector("#Username");
const Container= document.querySelector('.container');


// days converter
var day;
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
}
    DayDate.textContent = day;

// Month converter
var Month;
switch (new Date().getMonth()) {
    case 0:
      Month = "January";
      break;
    case 1:
      Month = "February";
      break;
    case 2:
       Month = "March";
      break;
    case 3:
      Month = "April";
      break;
    case 4:
      Month = "May";
      break;
    case 5:
      Month = "June";
      break;
    case 6:
      Month = "July";
      break;
    case 7:
      Month = "August";
      break;
    case 8:
      Month = "September";
      break;
    case 9:
      Month = "October";
      break;
    case 10:
      Month = "November";
      break;
    case 11:
      Month = "December";
}


let todaydate= new Date().getDate();
let todayyear= new Date().getFullYear();
// SET DATE
Fulldate.textContent= `${todaydate}th of ${Month}, ${todayyear}`;




function updateTime(){
    // Current time and date
    const now = new Date();

    //add hours
    let hours = now.getHours();
    // determine AM/PM
    if (hours<=12) {
        Hours.textContent=hours;
        AmPM.textContent='Am';
    } else {
        hours=now.getHours()-12;
        Hours.textContent=hours;
        AmPM.textContent='PM';
    }
    addzero(hours,Hours);

    // add minutes
    let minutes = now.getMinutes();
    addzero(minutes,Minutes);
    // add seconds
    let seconds = now.getSeconds();
    addzero(seconds,Seconds);

}

//call function every second
setInterval(updateTime, 1000);

// add zero to unit less than 10
// x is the time unit
// y is the holder
function addzero(x,y){
    if (x<10) {
        y.textContent = `0${x}`;
        
    } else {
        y.textContent=x;
    }

}


// determine time of day and change display pic
function DayTime(){
    let time = new Date().getHours();
    // changing image and greetings

    if(time === 0){
        Displaypic.setAttribute('src',"Night.gif");
        Container.style.boxShadow ="#201a0cea 10px 5px 10px 15px";
        TOD.textContent = "It's midnight";
    }
    else if(time === 1 ||time <= 4){
        Displaypic.setAttribute('src',"latenight.gif");
        Container.style.boxShadow ="#493c1eea 10px 5px 10px 15px";
        TOD.textContent = "It's Late Night";
    }
    else if(time === 5 || time <= 9){
        Displaypic.setAttribute('src',"sunrise.gif");
        Container.style.boxShadow ="#b6b30eea 10px 5px 10px 15px";
        TOD.textContent = "Good Morning";
    }
    else if(time === 10 || time <=11){
        Displaypic.setAttribute('src',"Morning.png");
        Container.style.boxShadow ="#d4d10c 10px 5px 10px 15px";
        TOD.textContent = "It's Mid-morning";
    }       
    else if(time === 12){
        Displaypic.setAttribute('src',"Afternoon.png");
        Container.style.boxShadow ="#ece903 10px 5px 10px 15px";
        TOD.textContent = "Noon Time";
    }    
    else if(time === 13 || time<=15){
        Displaypic.setAttribute('src',"Afternoon.png");
        Container.style.boxShadow ="#977411d8 10px 5px 10px 15px";
        TOD.textContent = "Good Afternoon";
    }    
    else if(time === 16 || time < 19){
        Displaypic.setAttribute('src',"Evening.png");
        Container.style.boxShadow ="#c2a261ea 10px 5px 10px 15px";
        TOD.textContent = "Good Evening";
    }
    else if(time === 19 || time<=21){
        Displaypic.setAttribute('src',"Evening.png");
        Container.style.boxShadow ="#977411d8 10px 5px 10px 15px";
        TOD.textContent = "It's Getting Dark";
    }  
    else{
        Displaypic.setAttribute('src',"Night.gif");
        Container.style.boxShadow ="#977411d8 10px 5px 10px 15px";
        TOD.textContent = "It's Sleeping Time, Quite Late";
    }

}

setInterval(DayTime, 10000);



// get name
function getName(){
    if (localStorage.getItem('name') === null) {
        User.textContent = '[Enter Name]';
    } else{
        User.textContent = localStorage.getItem('name');
    }

}


// set name
function setName(e){
    if(e.type === 'keypress'){
        // ensure enter is pressed
        if(e.which == 13|| e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            User.blur();
        }
    }else {
        localStorage.setItem('name', e.target.innerText);
    }
}


// get Aim
function getAim(){
    if (localStorage.getItem('aim') === null) {
        Aim.textContent = '[Enter Aim]';
    } else{
        Aim.textContent = localStorage.getItem('aim');
    }

}

// set aim
function setAim(e){
    if(e.type === 'keypress'){
        // ensure enter is pressed
        if(e.which == 13|| e.keyCode == 13){
            localStorage.setItem('aim', e.target.innerText);
            Aim.blur();
        }
    }else {
        localStorage.setItem('aim', e.target.innerText);
    }
}




// evens to call functions
User.addEventListener('keypress', setName);
User.addEventListener('blur', setName);

Aim.addEventListener('keypress', setAim);
Aim.addEventListener('blur', setAim);

// aim and name functions
getName();
getAim();