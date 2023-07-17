// console.log(__dirname)

// setInterval(()=>{  // will run Hello Node in the interval of every One second 
//     console.log("Hello Node")

// } , 1000) // Syntsax setInterval{what we have to run , for how ,uch time interval we have to run    }


const names=require('./3-name')
const sayHi = require('./4-utilts')
const items= require('./5-alternative_way_export')
const NAME = require('./5-alternative_way_export')
// console.log(names);
// console.log(sayHi);

sayHi('susan')
sayHi(names.ayush)
sayHi(names.Himanshu)