// const fs = require("fs");

// fs.appendFile('demo.txt', ' kalubarme', function(err){
//     if(err) console.log(err);
//     else console.log("File created successfully");
// })

// fs.writeFile('demo.txt', ' kalubarme', function(err){
//     if(err) console.log(err);
//     else console.log("File created successfully");
// })

// fs.copyFile('demo.txt', 'folder/demo2.txt', function(err){
//     if(err) console.log(err);
//     else console.log("File copied successfully");
// })


// fs.unlink('demo.txt', function(err){
//     if(err) console.log(err);
//     else console.log("File deleted successfully");
// });

// fs.rmdir('folder',{recursive:true, }, function(err)
// {
//     if(err) console.log(err);
//     else console.log("Folder deleted successfully");
// })

// fs.readFile('demo.txt',function(err, data){
//     if(err) console.log(err);
//     else console.log(data);
// })

const http = require('http');
const server = http.createServer(function(request, response){
    response.end("Hello world");
});

server.listen(3000, () => { console.log("Server started on port 3000"); });