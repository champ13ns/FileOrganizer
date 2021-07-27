let path=require("path");
let a=require("./oraganize")
let fs=require("fs");
let arr=process.argv.slice(2);
if(arr[0] == "organize")
a.fxn(arr[1]);
