var api= {
    key:"567acaa63f72aeed747e77c3f6624cc8",
    baseurl: "api.openweathermap.org/data/2.5"
}

var searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);


function setQuery()
