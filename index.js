//const axios = require('axios');

axios.get('https://api.nasa.gov/planetary/apod?api_key=TmmRW1tHiv0Q5h2h1x69FiWCwa4HZOWwu1IoGukz').then(resp => {
    document.getElementById("title").innerHTML = resp.data.title;
    document.getElementById("image").src = resp.data.hdurl;
    document.getElementById("beschreibung").innerHTML = resp.data.explanation;
    document.getElementById("copyright").innerHTML = resp.data.copyright;
    document.getElementById("date").innerHTML = resp.data.date;
    console.log(resp.data.hdurl);
    console.log(resp.data.title);
    console.log(resp.data.explanation);
    console.log(resp.data.copyright);
    console.log(resp.data.date);
});

// axios.get('https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=TmmRW1tHiv0Q5h2h1x69FiWCwa4HZOWwu1IoGukz').then(respm => {
//     document.getElementById("results").innerHTML = respm.data;
//     console.log(respm.data);
//     // console.log(resp.data.title);
//     // console.log(resp.data.explanation);
//     // console.log(resp.data.copyright);
//     // console.log(resp.data.date);
// });