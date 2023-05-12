let input=document.querySelector('input');
let addbtn =document.querySelector('button');
let tasklist= document.querySelector('ul');



addbtn.addEventListener('click', ()=>{
    if(input.value==''){}
    else{
    let text=input.value;
    let task = createtask(text);
    task.innerHTML+='<span class="closebtn"><i class="fa-solid fa-trash-can"></i></span>'
    tasklist.appendChild(task);
    input.value='';}
})

tasklist.addEventListener('click',(e)=>{
    if(e.target.nodeName==='I'){
    e.target.parentElement.parentElement.style='display:none';
    }
    if(e.target.nodeName==='LI'){
        e.target.classList.toggle('done');
    }
})

function createtask(text){
    let li=document.createElement('li');
    li.textContent=text;
    return li;
}

