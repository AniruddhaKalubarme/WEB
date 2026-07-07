const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const { AddNote, ReadNote } = require('./AddNote')
const { describe } = require('yargs')

// console.log("Hello", process.argv)
yargs(hideBin(process.argv))
    .command({
        command:'add',
        describe:'Adding Title',
        builder: {
            title:{
                describe:'Note Title',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function(argv){
            AddNote(argv.title)
            // console.log("Title: ", argv.title)
        }
    })
    .command({
        command:'read',
        describe:'Readng Titles',
        handler: function(){
            ReadNote()
        }
    })
    .parse()