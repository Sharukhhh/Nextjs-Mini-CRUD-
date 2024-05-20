import mongoose from 'mongoose';


const mongoConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION_URL);
        console.log('connected to db');
    } catch (error) {
        console.log(error , 'Error while connecting to db');
    }
}

export default mongoConnect;