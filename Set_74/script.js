let btn1 = document.getElementById("btn")
//event listening functions 
btn1.addEventListener("click", ()=>(
    document.querySelector(".box").innerHTML="i am now clicked."
))
document.addEventListener("keydown", (e)=>(
    console.log(e.key,e.keyCode)
))
