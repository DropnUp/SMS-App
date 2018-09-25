const electron = require('electron')
const shell = require('electron').shell
const axios = require('axios')

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
balance()