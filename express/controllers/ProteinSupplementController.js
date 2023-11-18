const Protein=require('../models/UserModels').UserModel
const postproteinSupplement=(req,res,next)=>{
    const email=req.body.email
    
    Protein.findOne({"email":email}).
    then((response)=>{
        
        
        response.proteinSupplement.push(req.body.proteinSupplements)
        response.save().then((r)=>{
            console.log(response)
            res.json(req.body.proteinSupplements)
        })
        console.log(req.body.proteinSupplements)
    }).catch(error=>{
        console.error(error)
        res.json(
            {
                message:'error'
            }
        )
    })
    //console.log(req.body.proteinSupplements)

}
const updateproteinSupplement=(req,res,next)=>{
    const email=req.body.email
    Protein.findOne({email}).
    then((response)=>{
        response.proteinSupplement=response.proteinSupplement.map((plan)=>{
            if(plan.name==req.body.proteinSupplements.name)
            {
                return {...plan,...req.body.proteinSupplements}
            }
            else{
                return plan
            }
        })
        //console.log(index)
        response.save().then((r)=>{
                
            if(response!=null  )
            {
                res.json({response:response.proteinSupplement})
            }
            else{
                res.json({response:[]})
            }
        })
    }).catch(error=>{
        console.error(error)
        res.json(
            {
                message:'error'
            }
        )
    })

}
const deleteproteinSupplement=(req,res,next)=>{
    const email=req.body.email

    //console.log(req.body)
    Protein.findOne({email}).
    then((response)=>{
        const index=response.proteinSupplement.findIndex(plan=> (plan['name']==req.body.proteinSupplements.name ))
        response.proteinSupplement.splice(index,1)
        //console.log(index)
        response.save().then((r)=>{
                
            if(response!=null  )
            {
                res.json({response:response.proteinSupplement})
            }
            else{
                res.json({response:[]})
            }
        })
    }).catch(error=>{
        console.error(error)
        res.json(
            {
                message:'error'
            }
        )
    })

}

const getproteinSupplement=(req,res,next)=>{
    const email=req.body.email

    //console.log(req.body)
    Protein.findOne({email}).
    then((response)=>{
        
                
            if(response!=null  )
            {
                res.json({response:response.proteinSupplement})
            }
            else{
                res.json({response:[]})
            }
        
    }).catch(error=>{
        console.error(error)
        res.json(
            {
                message:'error'
            }
        )
    })

}
module.exports={
    postproteinSupplement,updateproteinSupplement,deleteproteinSupplement,getproteinSupplement
}