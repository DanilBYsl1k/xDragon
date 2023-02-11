const Auth=require('../models/authModule')

const handlErrors=(res,error)=>{
    res.status(505).json({error})
}

const registerPost=(req,res)=>{
    const auth=new Auth(req.body)
    Auth
        .find({email:req.body.email})
        .then((user)=>{
            if (user.length==1) {
                res
                    .status(404)
                    .json('This user was already exist')
            } else {
                auth
                .save()
                .then((param)=>{
                    res
                        .status(200)
                        .json(param)
            })
            }
        })
        .catch((err)=> handlErrors(res,req))
}
const loginPost=async (req,res)=>{
    await Auth
        .find({email:req.body.email})
        .then((user)=>{
            if(user.length==1){
                user.map(data=>{
                    if(data.password==req.body.password){
                        res
                        .status(200)
                        .json(user)
                    }else{
                        res
                        .status(404)
                        .json('It ins`t correct password')
                    }
                })
            }
            else{
                res
                    .status(404)
                    .json('This user does not exist')
            }
        })
}

//const auth
module.exports={
    registerPost,
    loginPost
}