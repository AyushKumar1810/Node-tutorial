const {readFile , writeFile}=require('fs')
console.log('starting a file ');
//For a Async (async) function we should always have err(error) and res(result) >>
readFile('./content/subfolder/first.txt' , 'utf-8' , (err,result)=> {
    if (err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/subfolder/second.txt' , 'utf-8' ,(err,result)=>{
        if (err){
            console.log(err)
        }
        const second = result
        writeFile('./content/subfolder/result-async.txt' , `here is my async result of ${first} ${second}` , (err,result)=>{
        if (err){
            console.log(err);
            return;
        }
        console.log("Done with the task")
        }
        )
        
    })
    


})
//As we can see it's quite long that's why we always use async with wait ..
console.log("starting a new file");

// As we can see from the output we are getting , using async we will us smooth and fast task , we don't need to finish all the simulation of our boday code , we only have to complete what user ask for then result.. 