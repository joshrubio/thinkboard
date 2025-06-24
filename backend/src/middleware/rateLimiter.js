import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
try {
   const { success } = await ratelimit.limit('my-limit-key') // here you can use any key that uniquely identifies the user, like an IP address or user ID
   if (!success) {
       return res.status(429).json({ message: "Too many requests, please try again later." 
        
       });
   }
    next(); // If the request is within the limit, proceed to the next middleware or route handler
}   
catch (error) {
console.error("Rate limiter error:", error);
    next(error); // Pass the error to the next middleware for handling
}

}

export default rateLimiter;