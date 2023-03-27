const express=require('express');
const cors=require('cors');
const db=require('./utils/db');
const app=express();
const quizRouter=require('./routes/quizRoutes');

app.use(cors());
app.use(express.json());
app.use('/quiz',quizRouter);

app.listen(3000,()=>{
    console.log(`listening on http://localhost:3000/`);
})