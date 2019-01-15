const fs=require(`fs`);
let data="Haluuu";

let writerStream = fs.createWriteStream('text.txt');
writerStream.write(data, 'utf8');
writerStream.end();

//finish event
const finishHandler = ()=>{
    console.log(`Hey, I'm finished!`);
}

//error event
const errorHandler = (err)=>{
    throw err;
}

writerStream.on('finish', finishHandler).on('error', errorHandler);
console.log(`Complete!`);