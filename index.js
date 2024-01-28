const changeBg=()=>{
   
    const r=Math.floor(Math.random()*255)
    const g=Math.floor(Math.random()*255)
    const b=Math.floor(Math.random()*255)
    const color=`rgb(${r},${g},${b})`
    document.body.style.backgroundColor=color
 }
const btn=document.querySelector(".btn")
btn.addEventListener("click",changeBg)
