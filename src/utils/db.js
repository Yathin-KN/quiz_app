const mongoose =require('mongoose');

const CONNECTION_URI=process.env.CONNECTION_URI || 'mongodb://localhost:27017/quiz'

mongoose.connect(CONNECTION_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('connected succesfully');
});

db.on('error',(err)=>{
    console.error('connection error :',err);
});

module.exports=db;