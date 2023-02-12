const Auth=require('../models/authModule')

const handlErrors=(res,error)=>{
    res.status(505).json({error})
}

const registerPost=(req,res)=>{
    const auth=new Auth(req.body)
    auth
        .save()
        .then((param)=>{
            res
                .status(200)
                .json(param)
        })
        .catch((err)=> handlErrors(res,req))
}
const loginPost=(req,res)=>{
    console.log(req.body.email)
    Auth
        .find({email:req.body.email})
        .then((user)=>{
            // console.log(user)
            // console.log(user.length)
            // console.log(user.length==1)
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

// console.log(user.length==1)
// user.map((data)=>{
//     if(data.password==req.body.password){
//         console.log('da')
//     }
// })

//const auth
module.exports={
    registerPost,
    loginPost
}