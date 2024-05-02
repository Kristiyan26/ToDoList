import express from "express";
import bodyParser from "body-parser";

const port = 4000;
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



let tasks=[
    {
        id:1,
        text:"I have to become a milionaire",
        date : new Date().toDateString() +" - "+ new Date().getHours() +":"+ new Date().getMinutes()
    },
    {
        id:2,
        text:"I want to improve my discipline",
        date: new Date().toDateString() +" - "+ new Date().getHours() +":"+ new Date().getMinutes()

    }
];

app.get("/tasks",(req,res)=>{

    res.json(tasks);

});
const lastId=tasks[tasks.length-1].id ;

app.post("/tasks",(req,res)=>{
    
    const newTask={
        id: lastId+ 1,
        text : req.body.text,
        date: new Date().toDateString() +" - "+ new Date().getHours() +":"+ new Date().getMinutes()
    }
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.delete("/tasks/:id",(req,res)=>{
    const id= parseInt(req.params.id);
    const taskToDeleteId = tasks.findIndex(x=>x.id===id);  
    if(taskToDeleteId===-1){
        res.send(404);
    }  

    tasks.splice(taskToDeleteId,1);
    res.json("post deleted");
     
  
});


app.listen(port,()=>{

    console.log(`API is running on port ${port} `);

})