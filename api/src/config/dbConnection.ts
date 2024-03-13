import mongoose from "mongoose";

const connect = async () => {
    try {
        const c = await mongoose.connect(`${process.env.DATABASE_URL}`)
        console.log(
            "🔧 Connection established", c.connection.name
        );
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connect;