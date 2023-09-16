import mongoose from "mongoose";


const connection = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/BASIC-BANKING-SYSTEM")
        .then(() => console.log("Db Connected"))
        .catch((err) => console.log(err))
}

export default connection