const express=require('express');
const fetch = require('node-fetch');
const app =express();

const codetostateUrl="https://gist.githubusercontent.com/PhantomGrin/a1e8ad30915ecd9d2659400d496d1ed6/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json";

const statetocodeUrl="https://gist.githubusercontent.com/PhantomGrin/a1e8ad30915ecd9d2659400d496d1ed6/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json";


app.get('/getstate',(req,res)=>{
    fetch(codetostateUrl) .then(response => response.json())
    .then(json => res.send(json));
    
}); 
app.get('/getcode',(req,res)=>{
    fetch(statetocodeUrl) .then(response => response.json())
    .then(json => res.send(json));
    
});

app.listen(3000);