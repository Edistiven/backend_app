const mongoose =require('mongoose');

console.log(process.env.MONGODB_URI);
const URI = process.env.MONGODB_URI 
? process.env.MONGODB_URI :'mongodb+srv://Edistiven:1726656885Mongodb@cluster0.rfmtg.mongodb.net/react-app-notas?retryWrites=true&w=majority';

mongoose.connect(URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open',() =>{
    
});