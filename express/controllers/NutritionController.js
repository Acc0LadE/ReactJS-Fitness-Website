const Nutrition=require('../models/UserModels').NutritionModel

//show the list of employees 
const postNutritionData=(req,res,next)=>{
    // Employee.find()
    // .then(response =>{
    //     res.json({response})
    // })
    // .catch(error=>{
    //     console.error(error)
    //     res.json(
    //         {
    //             message:'error'
    //         }
    //     )
    // })
    console.log(req.body)
    res.send(req.body)

}
const updateNutritionData=(req,res,next)=>{

    console.log("update",req.body)
    res.send(req.body)

}
const deleteNutritionData=(req,res,next)=>{

    console.log("Delete",req.body)
    res.send(req.body)

}
module.exports={
    postNutritionData,updateNutritionData,deleteNutritionData
}