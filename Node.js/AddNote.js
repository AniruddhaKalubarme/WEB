const fs = require('fs')
const { stringify } = require('querystring')

debugger

function AddNote(title){
    let arr = fs.readFileSync('Notes.txt')
    arr = arr.toString().split('\n')
    // console.log(arr)
    if(!arr.includes(title))
    {
        fs.appendFileSync('Notes.txt', '\n'+title)
        console.log('Added title successfuly')
    }
    else{
        console.log('Title already Exists')
    }
}

function ReadNote(){
    let arr = fs.readFileSync('Notes.txt')
    console.log(arr.toString().split('\n'))
}

module.exports = {AddNote, ReadNote}