// Import dependencies
const jwt = require("jsonwebtoken");

const verifyToken  =(req,res,next)=>{
    const token = req.header("x-auth-token");
    if(!token) return res.status(401).send({
        ok:false,
        error:"Acces denied. No token provided"
    });
    try {
        const decoded = jwt.verify(token,"jwtAUthBasicPrivateKey@H");
        req.user = decoded;
    }catch(error){
        return res.status(401).send({
            ok:false,
            error:"Token expired"
        });
    }

    next();
}



// Export the middleware
module.exports = verifyToken;