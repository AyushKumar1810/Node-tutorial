// npm Global command 
// npm version
// local dependency - use it only in this particular Project 

//NOTE- For install  only in that particular project we use below command
// npm i <pacakage Name > For installing any pacakage
// global dependency -use it in any Project
// npm install -g <package Name> ##For installing global pacakage 

// Pacakage.json-Manifest file (stores important info about our project/pacakage )
//Manual Approach (Create package.json in the root , create properties etc)
// npm init (step by step , Press enter to skip) {Like we have to add our dependencies and it's version manually}
// npm init -y (everything default) { here it will automatically fetch Our dependencies and it's version}

// whenever we will install dependencies it will all name and version into package.json along with name and version , and a new folder willl created node _module and all package will be store here along with there file ...

//Now lets try out how we can use our external module that we have just install..

const _ = require("lodash")
const array =[1,[2,[3,[4]]]]
const updated_array =_.flattenDeep(array) // that will give flat file , i.e alll element in single array 
console.log(updated_array);


//NOTE- If we have to install same dependencies at it's in package.json then in command we only have to write "npm install"