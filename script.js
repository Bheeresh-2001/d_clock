const hourE1=document.getElementById("h");
const minuteE1=document.getElementById("m");
const secondE1=document.getElementById("s");
const ampmE1=document.getElementById("ampm");


function updateclock(){
    let H=new Date().getHours()
    let M=new Date().getMinutes()
    let S=new Date().getSeconds()
    let AmPm= "AM"

    if(H>12){
        H=H-12
        AmPm="PM"
    }

    H=H<10 ? "0"+ H: H;
    M=M<10 ? "0"+ M: M;
    S=S<10 ? "0"+ S: S;


    hourE1.innerText = H;
    minuteE1.innerText = M;
    secondE1.innerText = S;
    ampmE1,(innerText=AmPm);


    setTimeout(()=>{ 
        updateclock()
    },1000)
}

updateclock()