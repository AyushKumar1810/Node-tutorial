// THIS WILL HELP US TO READ , WRITE A FILE 
// const { isUtf8 } = require('buffer');
// const { log } = require('console');

// 1. first we have to through redaing method to read our file 
const {readFileSync , writeFileSync}=require('fs');
console.log('start the task');
const first = readFileSync('./content/subfolder/first.txt' ,'Utf8')// syntax will be readFile(filr path , format of the file )
const second = readFileSync('./content/subfolder/second.txt' ,'Utf8')
console.log(first , second);
 //2. For writing / creating new file
writeFileSync('./content/subfolder/result.txt' , `Here is the result : ${first} , ${second}`,
{flag:'a'}) // flag module will reapeat the result one time
//Syntax For writing/creating new file is writeFilesync(where to create , what to be written in that file)
console.log("done with the task ");
console.log("starting the next task");
// As we observe The java scripts reads file synchronous {step by step} .suppose one user is at line No 8 reading a file after finishing it then our Node will go to next step and it will take time .. 