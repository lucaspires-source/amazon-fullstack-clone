import express from "express";
import mongoose from 'mongoose'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
const app = express();
mongoose.connect( process.env.MONGODB_URL || 'mongodb://localhost/amazona',{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true
})
const port = process.env.PORT || 5000;

app.use('/api/users', userRouter)
app.use('/api/products',productRouter)
app.get("/", (req, res) => {
  res.send("Server is Ready");
});

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});

app.use((err,req,res,next)=>{
  res.status(500).send({message:err.message});
});