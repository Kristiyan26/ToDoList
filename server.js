import express from "express";
import axios from "axios";



const port = 3000;
const app = express();
const API_URL="http://localhost:4000";

app.use(express.static("public"));

app.get("/",async (req,res)=>{
    try{
        const result = await axios.get(`${API_URL}/tasks`);
        res.render("index.ejs",{tasks:result.data});
        
    }catch(error){

    }
});


app.listen(port,()=>{
    console.log(`Server listens to port: ${port}`);
});