const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Homepage route
app.get("/", (req,res)=>{
res.send("Coding Platform Backend Running 🚀");
});

// Login API
app.post("/login",(req,res)=>{
const username=req.body.username;
const password=req.body.password;

if(username==="admin" && password==="1234"){
res.json({message:"Login successful"});
}
else{
res.json({message:"Invalid login"});
}
});

// Run code API
app.post("/run",(req,res)=>{
const code=req.body.code;

res.json({
output:"Code executed successfully"
});
});

// Leaderboard API
app.get("/leaderboard",(req,res)=>{

const users=[
{username:"jyoti",solved:25},
{username:"rahul",solved:18}
];

res.json(users);
});

// PORT for Render
const PORT = process.env.PORT || 10000;

app.listen(PORT,()=>{
console.log("Server running on port "+PORT);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
