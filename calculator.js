


function appendToDisplay(val){
    let variable=document.querySelector("#display");
    if(variable.innerHTML==="0"){
        variable.innerHTML="";
    
    }
    variable.innerHTML += val;

}

function clearDisplay(){
    document.querySelector("#display").innerHTML ="0";
}

function clearLastElement(){
   let clear = document.querySelector("#display");
   clear.innerHTML = clear.innerHTML.slice(0,-1);
   if(clear.innerHTML===""){
    clearDisplay();
   }
}

function calculateResult(){
    let res=document.querySelector("#display");
    res.innerHTML=eval(res.innerHTML);

}
