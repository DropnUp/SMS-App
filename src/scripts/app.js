const electron = require('electron')
const shell = require('electron').shell
const axios = require('axios')

// All the info's
const base = 'esms.dianahost.com'
const api_uri = 'http://'+base+'/getkey/C2001512'+'/RYT.Yeasin@@010'
const balance_uri = ''

const author = document.getElementById('author')

author.addEventListener('click', (event) => {
    event.preventDefault()
    shell.openExternal(event.target.href)
})

function api() {
    let api_key = document.getElementById('api_key')
    let hello = axios.get(api_uri)
        .then( (response) => {
            let res = response.data.indexOf(':')
            let new_res = response.data.slice(res + 1)
            api_key.innerHTML = new_res
        })
}
//console.log(api_key)
api()

function bal() {
    let api_key = document.getElementById('api_key')
    let balance = document.getElementById('balance')
    axios.get('http://'+base+'/miscapi/'+api_key+'/getBalance')
        .then( (response) => {
            balance.innerHTML = response.data
        })
}

//bal()