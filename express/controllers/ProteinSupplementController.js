const proteinSupplement=require('../models/UserModels').proteinModel
const postproteinSupplement=(req,res,next)=>{
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
const updateproteinSupplement=(req,res,next)=>{
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
    console.log("update")
    console.log(req.body)
    res.send(req.body)

}
const deleteproteinSupplement=(req,res,next)=>{
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
    console.log("delete")
    console.log(req.body)
    res.send(req.body)

}
module.exports={
    postproteinSupplement,updateproteinSupplement,deleteproteinSupplement
}