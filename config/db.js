import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conex = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MongoDB database ${conex.connection.host}`.bgMagenta.white)
    } catch (error) {
        console.log(`Error in MongoDB ${error}`.bgRed.white)
        
    }
}

export default connectDB