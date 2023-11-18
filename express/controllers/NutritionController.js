const { format } = require('morgan')
const moment = require('moment/moment')
const Nutrition=require('../models/UserModels').UserModel

//show the list of employees 
const postNutritionData=(req,res,next)=>{
    Nutrition.findOne({"email":req.body.email}).then((response)=>{
        console.log(response)
        // res.send(req.body)
        response.nutritionPlan.push(req.body.nutrition)
        response.save().then((r)=>{
            console.log(response)
            res.json(req.body.nutrition)
        })
    })

    console.log(req.body)
    

}
const updateNutritionData=(req,res,next)=>{

    const email=req.body.email
    const date=moment(req.body.nutrition.date).format("DD/MM/YYYY")
    Nutrition.findOne({email}).then((response)=>{
        response.nutritionPlan=response.nutritionPlan.map((val)=>{
            if(val['name']==req.body.nutrition['name'])
            {
                return {...val,...req.body.nutrition}
            }
            else{
                return val
            }
        })
        response.save().then((r)=>{
            res.json(response)
        })
        // res.send(response.nutritionPlan)

        })
       

   

}
const updateNutritionMeals=(req,res,next)=>{
    Nutrition.findOne({"email":req.body.email}).then((response)=>{
        console.log(response)
        // res.send(response.nutritionPlan)
        let output=[]
        const ans=(response.nutritionPlan.map((nutriPlan)=>
        {
            if(nutriPlan.date==req.body.nutrition.date)
            {
                return (nutriPlan.meals.map((meal,idx)=>{
                    if(meal.name==req.body.nutrition.name)
                    {
                        //res.send(nutriPlan)
                        output.push(nutriPlan)
                        return nutriPlan
                    }
                }))
            }
        }))
    })

}
const getNutritionPlan=(req,res,next)=>{
    const email=req.body.email
    const date=moment(req.body.nutrition.date).format("DD/MM/YYYY")
    Nutrition.findOne({email}).then((response)=>{
        console.log(response.nutritionPlan)
        let out=[]
        response.nutritionPlan.map((val)=>{
            let date1=moment(val.date).format('DD/MM/YYYY')
            if(date1==date)
            {
                out.push(val)
            }
            console.log(val)
        })
        if(response!=null  )
        {
            res.json({response:out})
        }
        else{
            res.json({response:[]})
        }

    })
    
}
const deleteNutritionDataMeals=(req,res,next)=>{

    Nutrition.findOne({"email":req.body.email}).then((response)=>{
        console.log(response)
        const date =moment(req.body.date).format("DD/MM/YYYY")


        
        const index=response.nutritionPlan.findIndex(plan=> (plan.name==req.body.nutrition.name && moment(plan.date).format("DD/MM/YYYY") == date ))
        response.nutritionPlan.splice(index,1)
        response.save().then((r)=>{
            let out=[]
        response.nutritionPlan.map((val)=>{
            let date1=moment(val.date).format('DD/MM/YYYY')
            if(date1==date)
            {
                out.push(val)
            }
            
        })
        if(response!=null  )
        {
            res.json({response:out})
        }
        else{
            res.json({response:[]})
        }
    })

        //res.send(response.nutritionPlan[index])
    })

}
module.exports={
    postNutritionData,updateNutritionData,deleteNutritionDataMeals,getNutritionPlan
}