import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    console.log("Attempting to connect to MongoDB...")
    console.log("MongoDB URI:", process.env.MONGO_URI ? "Found" : "Missing")
    
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    })
    console.log("✅ MongoDB connected successfully")
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:")
    console.error("Error name:", error.name)
    console.error("Error message:", error.message)
    
    if (error.message.includes('querySrv') || error.message.includes('ENOTFOUND')) {
      console.error("\n🔍 DNS Resolution Error Detected!")
      console.error("Possible causes:")
      console.error("1. Network/firewall blocking MongoDB Atlas")
      console.error("2. DNS resolution issues")
      console.error("3. MongoDB cluster is paused or deleted")
      console.error("4. VPN or proxy interference")
      console.error("\n💡 Suggestions:")
      console.error("- Check your internet connection")
      console.error("- Verify the MongoDB cluster is running in Atlas")
      console.error("- Try disabling VPN if you're using one")
      console.error("- Check if your firewall is blocking MongoDB")
    }
    
    process.exit(1)
  }
}
