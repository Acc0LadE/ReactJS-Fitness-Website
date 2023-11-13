const moment = require('moment/moment')

const Fitness=require('../models/UserModels').UserModel

//show the list of employees 
const postFitnessData=(req,res,next)=>{
    const email=req.body.email
    
    Fitness.findOne({email}).
    then((response)=>{
        //req.body.workout.date = moment(req.body.workout.date).format('DD/MM/YYYY')
        
        response.workoutPlan.push(req.body.workout)
        response.save().then((r)=>{
            console.log(response)
            res.json(req.body.workout)
        })
    }).catch(error=>{
        console.error(error)
        res.json(
            {
                message:'error'
            }
        )
    })
    console.log(req.body)
    

}
const updateFitnessData=(req,res,next)=>{
    
    const email=req.body.email
    Fitness.findOne({email}).
    then((response)=>{
        response.workoutPlan=response.workoutPlan.map((val)=>{
            if(val['name']==req.body.workout['name'])
            {
                return {...val,...req.body.workout}
            }
            else{
                return val
            }
        })
        response.save().then((r)=>{
            res.json(response)
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
const deleteFitnessData=(req,res,next)=>{

    const email=req.body.email
    req.body.workout.date = moment(req.body.workout.date).format('DD/MM/YYYY')
    //console.log(req.body)
    Fitness.findOne({email}).
    then((response)=>{
        const index=response.workoutPlan.findIndex(plan=> (plan['name']==req.body.workout.name && moment(plan['date']).format('DD/MM/YYYY')==req.body.workout.date))
        response.workoutPlan.splice(index,1)
        //console.log(index)
        response.save().then((r)=>{
                let out=[]
            response.workoutPlan.map((val)=>{
                let date1=moment(val.date).format('DD/MM/YYYY')
                if(date1==req.body.workout.date)
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
    }).catch(error=>{
        console.error(error)
        res.json(
            {
                message:'error'
            }
        )
    })
    

}

const getFitnessData=(req,res,next)=>{
    const email=req.body.email
    req.body.workout.date = moment(req.body.workout.date).format('DD/MM/YYYY')
    Fitness.findOne({email}).
    then((response)=>{
        console.log(response.workoutPlan)
        let out=[]
        response.workoutPlan.map((val)=>{
            let date1=moment(val.date).format('DD/MM/YYYY')
            if(date1==req.body.workout.date)
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
    postFitnessData,updateFitnessData,deleteFitnessData,getFitnessData
}