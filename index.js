

// const msql=require("mysql");
const express=require("express");
const cors=require("cors");
// const jwt=require("jsonwebtoken");
const db=require("./database/db");

const Route=require("./Route/routes");

const app=express();
const PORT=process.env.PORT || 5000;

app.use(cors({
    methods:["GET","POST","PUT","DELETE"],
    origin:"http://localhost:3000"

}))
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))
app.use("/api", Route)




app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`server is running on ${PORT}`);

})