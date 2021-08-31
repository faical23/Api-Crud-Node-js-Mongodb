    const mongoose = require('mongoose');
    const Connect = async () =>{
        try{
            const uri ='mongodb+srv://faical:abc123ABC@cluster0.lehs5.mongodb.net/TodoList?retryWrites=true&w=majority';
            await mongoose.connect(uri,
                {
                    useNewUrlParser: true,
                });
            console.log('connected to mongodb')
        }catch(err){
            console.log(err)
        }
    }
    Connect();