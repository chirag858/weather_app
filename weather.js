let loc = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let climate = document.getElementById("climate");
let tempvalue= document.getElementById("temp-value");
let iconfile;
const searchInput = document.getElementById("search-input");
const searchbutton = document.getElementById("search-button");
// this window.addEventListner "load" is used to fetch user current location `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=7aefc737a0d02ed13155d5ee97d903f1 `
document.getElementById(search-input).addEventListener('change',(e)=>{
    document.getElementById(search-input).value = e.target.value;
    
})
