const electron = require('electron')
const shell = require('electron').shell

const author = document.getElementById('author')

author.addEventListener('click', (event) => {
    event.preventDefault()
    shell.openExternal(event.target.href)
})