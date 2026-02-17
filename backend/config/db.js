  import mongoose from "mongoose";
  const dataBase = async () =>{
    
    try{

      await mongoose.connect(process.env.MONGO_URI)

      console.log("connection success🔋");
      

    }catch(err){
      console.log(err || "connection failed or refused");
      
    }

  }

  export default dataBase