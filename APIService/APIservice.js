const express=require('express');
const fetch = require('node-fetch');
const app=express();

app.get('/',(req,res)=>{
    res.send("hello");
});

app.get('/codetostate/:code',async(req,res)=>{
    const checkcode = req.params.code;
    const data =await fetch('http://localhost:3000/getstate');
    const jsonArrayr=await data.json();
    const state=jsonArrayr[checkcode];
    res.send({state:state});
  
});
app.get('/statetocode/:state',async(req,res)=>{

    const checkstate = req.params.state;
    const data =await fetch('http://localhost:3000/getcode');
    const jsonArray=await data.json();
    const code=jsonArray.find(element => element.name === checkstate).abbreviation;
    res.send({ code: code });

});

app.listen(3001);