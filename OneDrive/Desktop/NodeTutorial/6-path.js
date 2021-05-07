//learning built-in path module
const path =require('path')

//path separator("delimiter")
//console.log(path.sep)

const filePath=path.join('\content', 'subfolder', 'test.txt')
//console.log(filePath)

//gettting basename of path
const base = path.basename(filePath)
//console.log(base);

//creating absolute path
const absolute=path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
//console.log(absolute);
