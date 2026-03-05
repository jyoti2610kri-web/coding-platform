const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login",(req,res)=>{

const username = req.body.username;
const password = req.body.password;

if(username==="admin" && password==="1234"){
res.json({message:"Login successful"});
}
else{
res.json({message:"Invalid login"});
}

});

app.listen(5000,()=>{
console.log("Server running on port 5000");
});
app.post("/run",(req,res)=>{

const code = req.body.code;

res.json({
output:"Code executed successfully"
});

});
app.get("/leaderboard",(req,res)=>{

const users=[
{username:"jyoti",solved:25},
{username:"rahul",solved:18}
];

res.json(users);

});
const authRoutes = require("./routes/auth");
const problemRoutes = require("./routes/problems");

app.use(authRoutes);
app.use(problemRoutes);
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
