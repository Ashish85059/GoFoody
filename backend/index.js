const express=require("express");
const app=express();
app.use(express.json())
const port=5000

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-with, Content-Type, Accept"
    );
    next();
})
const mongoDB=require("./db");
mongoDB();
app.get("/",(req,res)=>{
    res.send("Hello")
})

// Routes
app.use("/api",require("./Routes/CreateUser"))
app.use("/api",require("./Routes/DisplayData"))
app.use("/api",require("./Routes/OrderData"))

app.listen(port,()=>{
    console.log(`Server Started on port ${port}`)
})