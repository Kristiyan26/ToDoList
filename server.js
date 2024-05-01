import express from "express";
import axios from "axios";
import bodyParser from "body-parser";



const port = 3000;
const app = express();
const API_URL="http://localhost:4000";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", async (req,res)=>{
    try{
        const result = await axios.get(`${API_URL}/tasks`);
        res.render("index.ejs",{tasks:result.data});
        
    }catch(error){

    }
});
app.post("/api/tasks", async (req,res)=>{
    try{
        const result = await axios.post(`${API_URL}/tasks`,req.body);
        res.redirect("/");


    }catch(error){

    }
});

app.get("/api/tasks/delete/:id",async(req,res)=>{
    try{
        const id = parseInt(req.params.id);
        await axios.delete(`${API_URL}/tasks/${id}`);
        res.redirect("/");

    }catch(error){

    }
})


app.listen(port,()=>{
    console.log(`Server listens to port: ${port}`);
});