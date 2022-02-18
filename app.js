const express = require('express')
const bodyparser = require('body-parser')
const app=express()

app.use(bodyparser.urlencoded({extended:true}))

app.get('',(req,res)=> {
    res.sendFile(__dirname + '/index.html')
})

app.post('/add',(req,res)=>{
    const n1=Number(req.body.num1)
    const n2=Number(req.body.num2)
    const addition=n1 + n2
    res.send('the value is :'+ addition)
})

app.post('/sub',(req,res)=>{
    const n1=Number(req.body.num1)
    const n2=Number(req.body.num2)
    const subtract=n1 - n2
    res.send('the value is :'+ subtract)
})

app.post('/div',(req,res)=>{
    const n1=Number(req.body.num1)
    const n2=Number(req.body.num2)
    const division=n1 / n2
    res.send('the value is :'+ division)
})

app.post('/mul',(req,res)=>{
    const n1=Number(req.body.num1)
    const n2=Number(req.body.num2)
    const multiply=n1 * n2
    res.send('the value is :'+ multiply)
})

app.listen(3000,(res)=>{
    console.log("Server running at Port 3000")
})