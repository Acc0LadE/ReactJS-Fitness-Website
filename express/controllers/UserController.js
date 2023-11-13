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
const postUserData=(req,res,next)=>{
    let user=new User({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age,
        workoutPlan: req.body.workoutPlan,
        proteinSupplement:req.body.workoutPlan,
        nutritionPlan:req.body.nutritionPlan

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
    postUserData,updateUserData,deleteUserData,getUserData
}