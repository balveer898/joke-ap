let h2=document.querySelector("h2")
let p=document.querySelector("p")
let button=document.querySelector("button")

const getJoke= async()=>{
    let data=  await fetch("https://official-joke-api.appspot.com/jokes/random");
    let newdata= await data.json();

    let joke= newdata.setup
    h2.innerText=joke
}
button.addEventListener("click",getJoke);
