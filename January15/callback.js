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


// const event=require('events');
// const em=new event.EventEmitter();

// const eHandler = ()=>{
//     console.log(`Hey, I'm the first event handler!`);
//     em.emit('second');
// }

// const eHandler2 = ()=>{
//     console.log(`Hey, I'm the second event handler!`);
// }

// em.on(`first`, eHandler).on('second', eHandler2);
// em.emit(`first`);