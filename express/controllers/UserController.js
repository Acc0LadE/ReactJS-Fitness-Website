const User=require('../models/UserModels').UserModel

//show the list of employees 
const getUserData=(req,res,next)=>{
    User.find()
    .then(response =>{
        res.json({response})
    })
    .catch(error=>{
        console.error(error)
        res.json(
            {
                message:'error'
            }
        )
    })
}
const getUserDataBasedOnMailId=(req,res,next)=>{
    console.log(req.params)
    User.findOne(req.params)
    .then(response =>{
        res.json({response})
        console.log(response)
    })
    .catch(error=>{
        console.error(error)
        res.json(
            {
                message:'error'
            }
        )
    })
    
}
const postUserData=(req,res,next)=>{
    console.log("posting")
    resVal=req.body.form
    let user=new User({
        name:resVal.name,
        password:resVal.password,
        email:resVal.email,
        phone:resVal.phone,
        age:resVal.age,
        workoutPlan: resVal.workoutPlan==null?[]:resVal.workoutPlan,
        proteinSupplement:resVal.proteinSupplement==null?[]:resVal.proteinSupplement,
        nutritionPlan:resVal.nutritionPlan==null?[]:resVal.nutritionPlan

    })
    user.save()
    .then(response=>{
        res.json(
            {
                message:'user added successfully'
            }
        )
    }).catch(error=>
        {
            res.json(
                {
                    message:'cannot add '
                }
            )
        })
    

}
const updateUserData=(req,res,next)=>{

    console.log("update",req.body)
    res.send(req.body)

}
const deleteUserData=(req,res,next)=>{

    const {email}=req.params;
    User.deleteOne({email:email}).then((response)=>{
        console.log("deleted user successfully")
        res.status(204).send()
    })
    .catch((err)=>
    {
        res.json(
            {
                message:'cannot delete data '
            }
        )
    })

}
module.exports={
    postUserData,updateUserData,deleteUserData,getUserData,getUserDataBasedOnMailId
}