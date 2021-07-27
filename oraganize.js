let path=require("path");
let fs=require("fs");
function fn(src){
 let arr=fs.readdirSync(src);
    let a1=new Array;
    let a2=new Array
    let a3=new Array;
    let a4=new Array;
    let a5=new Array;
    let dp1=path.join(src,"Media");
    let dp2=path.join(src,"Documents");
    let dp3=path.join(src,"Archives");
    let dp4=path.join(src,"App");
    let dp5=path.join(src,"Others");
    // console.log(dp1);
    // console.log(dp2);
    // console.log(dp3);
    // console.log(dp4);
    // console.log(dp5);
    if(!fs.existsSync(dp1)){
    fs.mkdirSync(dp1);
    fs.mkdirSync(dp2);
    fs.mkdirSync(dp3);
    fs.mkdirSync(dp4);
    fs.mkdirSync(dp5);  
    }
    else
    {
        console.log("Directory already exist!!")
        return;
    }
 for(let i=0;i<arr.length;i++)
 {
     let np=path.join(src,arr[i]);
     let x=path.extname(np);
     if(x == ".mkv" || x == ".jpg" || x == ".mp4" || x == ".jpeg")
     {
         let nnp=path.join(src,"Media",arr[i]);
         let ffs=path.join(src,arr[i]);
         fs.copyFileSync(ffs,nnp);
     }
      else if(x == ".pdf" || x == ".txt")
     {
           let nnp=path.join(src,"Documents",arr[i]);
         let ffs=path.join(src,arr[i]);
         fs.copyFileSync(ffs,nnp);

     }
     else if(x == ".zip")
     {
           let nnp=path.join(src,"Archives",arr[i]);
         let ffs=path.join(src,arr[i]);
         fs.copyFileSync(ffs,nnp);
     }
     else if(x == ".exe")
     {
           let nnp=path.join(src,"App",arr[i]);
         let ffs=path.join(src,arr[i]);
         fs.copyFileSync(ffs,nnp);
     }
     else
    {
          let nnp=path.join(src,"Others",arr[i]);
         let ffs=path.join(src,arr[i]);
         fs.copyFileSync(ffs,nnp);
    }
 } 

}
module.exports={
    fxn:fn   
}