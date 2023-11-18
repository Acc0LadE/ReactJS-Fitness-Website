const mongoose=require('mongoose')
const schema=mongoose.Schema


const WorkoutPlan =new schema({
    name:{
        type :String
    },
    duration:
    {
        type :String
    },
    achieved:{
        type :String
    },
    timeParam:{
        type: String
    },
    date:{
        type:String
    }

},{timestamps:true})

const food =new schema({
    name:String,
    quantity:Number

},{timestamps:true})

const meals =new schema({
    name:String,
    food:[food]

},{timestamps:true})
const NutritionPlan =new schema({
    name:String,
    quantity:Number,
    type:String,
    date:{
        type:String
    }

},{timestamps:true})


const proteinSupplement =new schema({
    name:{
        type :String
    },
    quantity:
    {
        type :String
    },
    price:{
        type :String
    }

},{timestamps:true})
const User =new schema({
    name:{
        type :String
    },
    password:
    {
        type :String
    },
    email:{
        type :String
    },
    phone:{
        type: String
    },
    age:{
        type:Number
    },
    workoutPlan:[WorkoutPlan],
    proteinSupplement:[proteinSupplement],
    nutritionPlan:[NutritionPlan]

    

},{timestamps:true})
const UserModel=mongoose.model('User',User)
const WorkoutModel=mongoose.model("WorkoutPlan",WorkoutPlan)
const proteinModel=mongoose.model("proteinSupplement",proteinSupplement)
const NutritionModel=mongoose.model("NutritionPlan",NutritionPlan)
module.exports={UserModel, WorkoutModel,proteinModel,NutritionModel}