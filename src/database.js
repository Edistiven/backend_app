const mongoose =require('mongoose');

console.log(process.env.MONGODB_URI);
const URI = process.env.MONGODB_URI 
? process.env.MONGODB_URI :'mongodb://localhost/database';

mongoose.connect(URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open',() =>{
    
});