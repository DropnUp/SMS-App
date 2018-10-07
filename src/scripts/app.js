// All the dependencies
const electron = require('electron')
const shell = require('electron').shell
const axios = require('axios')
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

// All the info's
const base = 'esms.dianahost.com'
const api_uri = 'http://'+base+'/getkey/C2001512'+'/RYT.Yeasin@@010'
const balance_uri = ''

// Open Default Browser to open external links
const author = document.getElementById('author')
author.addEventListener('click', (event) => {
    event.preventDefault()
    shell.openExternal(event.target.href)
})

let my_api = ""
// Retrieve API Key
/*
function api() {
    let api_key = document.getElementById('api_key')
    let hello = axios.get(api_uri)
        .then( response => {
            let res = response.data.indexOf(':')
            let new_res = response.data.slice(res + 1)
            api_key.innerHTML += new_res
            return Promise.resolve(new_res)
        })
    console.log(hello)
}
*/

function api() {
    let api_key = document.getElementById('api_key')
    let xhr = new XMLHttpRequest()
    xhr.open('GET', api_uri)
    xhr.send()
    my_api = xhr.responseText
    return
}
api()
console.log(my_api)


console.log(my_api)
// Check Balance
function bal() {
    let api_key = document.getElementById('api_key').innerHTML
    console.log(api_key)
    let balance = document.getElementById('balance')
    axios.get('http://'+base+'/miscapi/'+api_key+'/getBalance')
        .then( (response) => {
            balance.innerHTML = response.data
        })
}
bal()