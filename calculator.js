
let btns=document.querySelectorAll('button')
let inp=document.querySelector('input')
let handleBack=()=>{
    inp.value=inp.value.slice(0,-1)
}
let Product=()=>{
    inp.value+='*'
}
btns.forEach((btn)=>{
btn.addEventListener('click',(e)=>{
    console.log(e.target.innerText);
    if(e.target.innerText=="="){
        inp.value = eval(inp.value)
    }
    else if(e.target.innerText=="CLEAR"){
        inp.value='';
    }
    else if(e.target.innerText=="X"){
        inp.value=inp.value
    }
    else{
        inp.value += e.target.innerText;

    }
})
})