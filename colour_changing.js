function randomclr(){
    const hex= '0123456789ABCDEF'
    // clr total have 6 digits
    let clr= '#';
    for(let i=0;i<6; i++){
        clr+=hex[Math.floor(Math.random()*16)]
    }
    return clr
}
let intervalid;
// console.log(randomclr())
const startthefunction= function(){
 function startclr() {
    document.body.style.backgroundColor= randomclr();
}
  if(!intervalid)
  {
  intervalid=setInterval(startclr,1000);}
}
const stopthefunction= function(){
clearInterval(intervalid);
intervalid=null;
}
document.querySelector('.start').addEventListener('click',startthefunction);
document.querySelector('.stop').addEventListener('click',stopthefunction);