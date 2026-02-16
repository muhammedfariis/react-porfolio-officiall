import mongoose from "mongoose";
const dataBase = async () =>{
  
  try{

    await mongoose.connect(process.env.MONGOURI)

    console.log("connection success🔋");
    

  }catch(err){
    console.log(err || "connection failed or refused");
    
  }

}

export default dataBase