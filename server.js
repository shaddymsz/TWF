const fs = require('fs');
let rawdata = fs.readFileSync('goods.json'); 
let rawdata2 = fs.readFileSync('mincost.json'); 
let cost = JSON.parse(rawdata2); 
let order = JSON.parse(rawdata);
let express =require('express');
const bodyParser = require('body-parser');
const app = express(); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/api', (req, res) => {
var l=[];
var distance=0;
var final=0;
var total=0;
var variable_list=['a','b','c','d','e','f','g','h','i']
    for(let j in variable_list){
  if (!parseInt(req.body[variable_list[j]])) {
    req.body[variable_list[j]] = 0;
  }}  

if(req.body.a || req.body.b || req.body.c)
{
   l.push("c1");
   total =total+3*req.body.a+2*req.body.b+8*req.body.c;
    //console.log(total);
}
if(req.body.d ||req.body.e ||req.body.f)
{l.push("c2")
total =total+12*req.body.d+25*req.body.e+15*req.body.f;


}
if(req.body.g ||req.body.h ||req.body.i)
{l.push("c3")
total =total+0.5*req.body.g+1*req.body.h+2*req.body.i;
}

if(l.length==1)
{
if(l.includes('c1'))
distance=3;
else if(l.includes('c2'))
distance=2.5;
else if(l.includes('c3'))
distance=2;
}
if(l.length==2)
{
if(l.includes('c1')&&l.includes('c1'))
distance=6.5;
else if(l.includes('c2')&&l.includes('c3'))
distance=4.5;
else if(l.includes('c3')&&l.includes('c1'))
distance=7;
}
if(l.length==3)
{
   distance=9;
}

if(total==0)
final=0;
else if(total<=5)
final=distance*10
else{
final=(distance*10)+(Math.floor(total/5)-1)*8;

}



//console.log(di);
res.send({final});
      



});



app.listen(8000, () => console.log('Example app listening on port 8000 !'));