import jwt from 'jsonwebtoken'
const SECRET_TOKEN= 'secret'
const auth=(req,res,next)=>{
    console.log('heelo')
   try {
    let token =req.headers.authorization
    console.log(token)
    if(token){
 token=token.split(" ")[1]
 let user=jwt.verify(token,SECRET_TOKEN)
 console.log('hello',user.id)
 req.userId=user.id
    }
 else{
     res.status(401).json({message:"Unauthorized Users"})
    }
 next()
   }
 catch (error) {
     console.log(error)
    res.status(401).json({message:"Something Wrong"})
   }
}

export default auth;