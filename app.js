const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/",(req,res)=>{
    res.status(200).send({"one":1,"two":2})
})

app.listen(PORT,()=>{
    console.log(`Server started on port no. ${PORT}`)
})