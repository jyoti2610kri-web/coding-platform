const express = require("express");
const router = express.Router();

router.post("/login",(req,res)=>{

const username = req.body.username;
const password = req.body.password;

if(username==="admin" && password==="1234"){
res.json({message:"Login successful"});
}
else{
res.json({message:"Invalid login"});
}

});

module.exports = router;