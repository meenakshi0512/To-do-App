let date=new Date()
let weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let day=weekday[date.getDay()]+","+months[date.getMonth()]+","+date.getDate()
document.getElementById("today-date").innerHTML=day
let input=document.getElementsByTagName("input")[0]
let submit=document.getElementsByClassName("submit")[0]
let addbtn=document.getElementsByTagName("button")[0]
let complete=document.getElementsByClassName("completedtask")[0]
input.onclick=()=>{
    submit.style.display='block'
}

let completemenu=document.getElementById("arrow-right")
completemenu.onclick=()=>{
    complete.classList.toggle("submit")
}

function createnewlabel(y,task,idvalue){
     let newlabel=document.createElement('label')
     newlabel.setAttribute('for',task)
     newlabel.setAttribute('id',idvalue)
     newlabel.classList.add("task-content")
     y.appendChild(newlabel)
     newlabel.innerHTML=input.value
     return newlabel
}

function createnewinput(y,task){
      let newinput=document.createElement("input")
      newinput.setAttribute("type","checkbox")
      newinput.setAttribute("id",task)
      newinput.classList.add("task-click")
      y.appendChild(newinput) 
      return y
}
function createnewdiv(){
    let y=document.createElement('div')
    y.classList.add("shadow")
    y.classList.add("addnewtask")
    y.classList.add("menu") 
    return y
}
function createnewnode(container,task,idvalue){
      let newdiv=createnewdiv()
      container.insertBefore(newdiv,container.lastElementChild)
      let newinput = createnewinput(newdiv,task)
      let newlabel=createnewlabel(newdiv,task,idvalue)
      localStorage.setItem(idvalue,input.value)
      newinput.addEventListener('click',()=>{
      let cb=document.getElementById(task)
        if(cb.checked==false)
            newdiv.classList.replace("completenewtask","addnewtask")
            container.insertBefore(newdiv,container.lastElementChild)
            newlabel.style.textDecoration='none'
        }
      )
      newinput.addEventListener('click',()=>{
        let cb=document.getElementById(task)
        if(cb.checked==true){
            newdiv.classList.replace("addnewtask","completenewtask")
            complete.appendChild(newdiv)
      }})
      adddeletebtn(newdiv,idvalue)
      return newdiv
}

function adddeletebtn(div1,idvalue){
    div1.insertAdjacentHTML('beforeend','<i class="fa-solid fa-trash"></i>')
    div1.lastElementChild.addEventListener('click',()=>{
       div1.style.display="none"
       localStorage.removeItem(idvalue)
       alert("Task deleted succesfully...")
    })
 }

addbtn.onclick=()=>{
    submit.style.display="none"
    if(input.value=="")
       alert("Please Enter some text")
    else{
    let container=document.getElementsByClassName("container")[0]
    let task=container.querySelectorAll('.addnewtask').length
    let idvalue="task"+task
    let newnode=createnewnode(container,task,idvalue)
    input.value=""
    }
}

