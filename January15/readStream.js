const fs=require(`fs`);
let data="Haluuu";

let writerStream = fs.createWriteStream('readStream.txt');
writerStream.write(data, 'utf8');
writerStream.end();

//finish event
writerStream.on('finish',()=>{
    console.log(`Hey, I'm finished!`);
})

//error event
writerStream.on('error',(err)=>{
    throw err;
})

console.log(`Complete!`);