const express=require('express')
const router=express.Router()


//const employeeController=require('../controllers/EmployeeController')
const FitnessController=require('../controllers/FitnessController')
router.post('/postFitnessPlan',FitnessController.postFitnessData)
router.put('/updateFitnessPlan',FitnessController.updateFitnessData)
router.post('/deleteFitnessPlan',FitnessController.deleteFitnessData)
router.post('/getFitnessPlan',FitnessController.getFitnessData)

const proteinSupplementController=require('../controllers/proteinSupplementController')

router.post('/postproteinSupplement',proteinSupplementController.postproteinSupplement)
router.put('/updateproteinSupplement',proteinSupplementController.updateproteinSupplement)
router.post('/deleteproteinSupplement',proteinSupplementController.deleteproteinSupplement)
router.post('/getproteinSupplement',proteinSupplementController.getproteinSupplement)

const nutritionPlanController=require('../controllers/NutritionController')
router.post('/postNutritionPlan',nutritionPlanController.postNutritionData)
router.post('/deleteNutritionPlanByMeals',nutritionPlanController.deleteNutritionDataMeals)
router.post('/getNutritionPlan',nutritionPlanController.getNutritionPlan)
router.put('/updateNutritionData',nutritionPlanController.updateNutritionData)

const UserController=require('../controllers/UserController')

router.get('/getUserData',UserController.getUserData)
router.post('/postUserData',UserController.postUserData)
router.put('/updateUserData',UserController.updateUserData)
router.get('/getUserData/:email',UserController.getUserDataBasedOnMailId)
router.post('/deleteUserData/:email',UserController.deleteUserData)
module.exports=router