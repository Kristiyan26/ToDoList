
const taskInput=document.getElementById("taskInput");
const taskList=document.getElementById("tasks");
const tasks = document.querySelectorAll("li");

//   function addTask(){
//      if(taskInput.value==""){
//          window.alert("Enter a task First!");
 
//      }
//      else{
//         const newTask= document.createElement("li");
//         newTask.textContent=taskInput.value;
 
//         const span  = document.createElement("span");
//         span.innerHTML="\u00d7";
        
//         newTask.appendChild(span);
 
 
//         taskList.appendChild(newTask);
    
       
 
//      }
//      taskInput.value="";

 
//  };
 
 
 
 taskList.addEventListener("click",event=>{
   if(event.target.tagName=="LI"){
    
       event.target.classList.toggle("checked");
  
     
   }

 })
 
//  function saveData(){
 
//    localStorage.setItem("data",taskList.innerHTML);
//  }
 
//  function displayData(){
//    taskList.innerHTML=localStorage.getItem("data");
//  }
 


