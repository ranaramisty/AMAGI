// const dns=require(`dns`);
// dns.resolve4(`twitter.com`,(err, add)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log(`Address for Twitter: ${JSON.stringify(add)}`);
//     }
// })


// const txt=require(`fs`);
// console.log(`Before`);
// txt.readFile(`/home/student/Desktop/Claire/AMAGI/January15/text`,(err, cb)=>{
//     console.log(`Hi`);
// })
// console.log(`After`);


// const txt=require('fs');
// let data="This is a new text.";
// txt.mkdir('January15', ()=>{
//     txt.writeFile('January15/text',data,(err)=>{
//         if(err){
//             throw err;
//         }
//         else{
//             console.log(`New text created!`);
            
//             txt.readFile('January15/text', (err, data)=>{
//                 if(err){
//                     throw err;
//                 }
//                 else{
//                     console.log(`New Text: ${data}`);
//                 }
//             });
//         }
//     });
// })

// const txt=require('fs');
// let folder="January15";
// let file="text";
// let data="This is a new text.";
// txt.mkdir(folder, ()=>{
//     txt.writeFile(folder/file,data,(err)=>{
//         if(err){
//             throw err;
//         }
//         else{
//             console.log(`New text created!`);
            
//             txt.readFile(folder/file, (err, data)=>{
//                 if(err){
//                     throw err;
//                 }
//                 else{
//                     console.log(`New Text: ${data}`);
//                 }
//             });
//         }
//     });
// })


const event=require('events');
const em=new event.EventEmitter();

const eHandler = ()=>{
    console.log(`Hey, I'm the first event handler!`);
    em.emit('second');
}

const eHandler2 = ()=>{
    console.log(`Hey, I'm the second event handler!`);
}

em.on(`first`, eHandler).on('second', eHandler2);
em.emit(`first`);

eHandler();


// const m=require(`os`);

// console.log(`Uptime: ${m.uptime()}`);
// console.log(`Load: ${m.loadavg()}`);
// console.log(`CPU: ${JSON.stringify(m.cpus())}`);


// let buffer=new Buffer(10);
// console.log(buffer);

// let buffer=new Buffer("Misty", "base64");
// buffer.write("Haluuu","utf-8");
// console.log(buffer);