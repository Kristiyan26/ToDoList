
const taskList=document.getElementById("tasks");


 taskList.addEventListener("click",event=>{
   if(event.target.tagName=="LI"){
    
       event.target.classList.toggle("checked");
  
     
   }

 })
 



