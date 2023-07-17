const { resolveAny } = require('dns');
const os = require('os')
// Info about current user
const user = os.userInfo()
console.log(user);
// returns systems run time
const runtime =os.uptime()
console.log(runtime);
const cutrrentOS ={
    name : os.type() ,
    release : os.release(),
    total_memeory : os.totalmem(),
    left_memeory : os.freemem()
}
console.log(cutrrentOS);