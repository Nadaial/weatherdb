var api= {
    key:"567acaa63f72aeed747e77c3f6624cc8",
    baseurl: "api.openweathermap.org/data/2.5"
}

var searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);


function setQuery(event) {
    if (event.keyCode == 13){
    getResults(searchbox.value);
    console.log(searchbox.value);
}
}

function getResults(query){

    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();

    }).then(displayResults);
}

function displayResults(weather){
    console.log(weather);
    let city=document.querySelector('.location.city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    var now = new Date();
    var date =document.querySelector('location.date');
    date.innerText=dateBuilder(now);
}



function dateBuilder (d){
    let months =["January", "February","March","April","May", "June","July", "August",
    "September", "October", "November","December"];
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];

    let day =days[d.getDay()];
    let date=d.getDate();
    let month = months [d.getMonth()];
    let year =d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}