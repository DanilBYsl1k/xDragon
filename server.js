const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')


const PORT=1488
const app=express()
const authRouter=require('./backend/routers/authRouters')
const UrlData='mongodb+srv://admin:byrlenko@cluster0.q6yf1ae.mongodb.net/auth?retryWrites=true&w=majority'

app.use(cors())
app.use(express.json())
app.use(authRouter)
mongoose.set('strictQuery', false)
mongoose
    .connect(UrlData ,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>console.log('great connecting'))
    .catch((err)=>console.log((`error`,err)))


app.listen(PORT, (err)=>{
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
})
