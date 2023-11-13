const express=require('express')
const mongoose=require('mongoose')
const morgan=require('morgan')
const bodyParser=require('body-parser')
const cors = require('cors');
userRouter=require("./routes/UserRoutes")
mongoose.connect('mongodb+srv://lavanya:1234@cluster0.ihz48fe.mongodb.net/TestWorkout?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const db=mongoose.connection
db.on('error',(err)=>{
    console.error(err)
})
db.once('open', () => console.log('Connected to MongoDB'));

const app=express()
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.send("hello Node api")
})
app.use('/UserInfo',userRouter)

app.listen(3001,()=>{
    console.log('Node api is running on port 3001')
})