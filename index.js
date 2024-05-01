import express from "express";

const port = 4000;
const app = express();


const tasks=[
    {
        text:"I have to become a milionaire"
    }
];

app.get("/tasks",(req,res)=>{

    res.json(tasks);

})


app.listen(port,()=>{

    console.log(`API is running on port ${port} `);

})