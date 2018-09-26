const electron = require('electron')
const shell = require('electron').shell
const axios = require('axios')
const request = require('request')


// All the info's
const base = 'esms.dianahost.com'
const api_uri = 'http://'+base+'/getkey/C2001512'+'/RYT.Yeasin@@010'

const author = document.getElementById('author')

author.addEventListener('click', (event) => {
    event.preventDefault()
    shell.openExternal(event.target.href)
})


let balance = document.getElementById('balance')


function balance() {
    //axios.get("http://esms.dianahost.com/getkey/C2001512/RYT.Yeasin@@010").then(res => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://esms.dianahost.com/getkey/C2001512/RYT.Yeasin@@010", false ); // false for synchronous request
    xmlHttp.send();
    return xmlHttp.responseText;
    balance.innerHTML = xmlHttp.responseText;
   //})
}

// function balance() {
//     request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2017-08-03', {json: false}, (err, res, body) => {
//         if (err) { return console.log(err); }
//         console.log(body.url);
//         console.log(body.explanation);
//     })
// }
balance()