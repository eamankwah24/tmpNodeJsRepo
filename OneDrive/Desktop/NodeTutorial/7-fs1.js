//learning built-in FS module
const {readFileSync, writeFileSync}= require ('fs');

//reading from file
const first =readFileSync('./content/first.txt','utf8')
const second =readFileSync('./content/second.txt','utf8')
console.log(first,second);

//creating and writing to a file syncronously
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, 
${second}`,
{flag: 'a'}
)