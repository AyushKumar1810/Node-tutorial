const http=require('http');
const server = http.createServer((req , res )=>{
    if (req.url==='/'){
        res.end("Hello there welcome to my 1st Node server , This is our home Page");
    }
    else if (req.url==='/about'){
        res.end("here is some imformation about us..");
    }
    else if (req.url==='/contact'){
        res.end("Here is our Contact info that will Help reaching us ..");
    }
    else{
        res.end(`
    <h1>Oops!</h1>
    <p>we can't seem to find what you are looking for </p>
    <a href="/">back home</a>

    `);
}
    // console.log(req);
    // res.write("Hello there welcome to my 1st Node server")
    // res.end()
    
})
server.listen(6969)
//resquest{req} is what people are requesting from our webserver 
//respond{res} is what we want to send them ...