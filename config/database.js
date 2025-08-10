import mongoose from "mongoose"

const connectToDatabase = () => {
    try {
        mongoose.connect(`${process.env.CLOUD_MONGI_URL}/${process.env.DB_NAME}`).then(
            (res) => {
                console.log('database connected succesfully...')
            }
        ).catch((err) => {
          console.log(err);
          
            
        })
    } catch (error) {
        console.log(error);
    }
}

export default connectToDatabase