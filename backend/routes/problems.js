const express = require("express");
const router = express.Router();

router.get("/problems",(req,res)=>{

const problems=[
{title:"Two Sum",difficulty:"Easy"},
{title:"Binary Search",difficulty:"Easy"},
{title:"Palindrome Number",difficulty:"Easy"}
];

res.json(problems);

});

module.exports = router;