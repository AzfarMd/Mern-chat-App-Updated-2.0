const express=require("express");
const router=express.Router()
const {registerUser,authUser,allUsers}=require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");
//Routes decide which function should execute.
//Controllers decide what that function actually does.
//Middleware performs checks before the controller execute
router.post('/', registerUser);//POST: Frontend sends data to Backend. (NEW USER)
router.get('/', protect, allUsers); //GET: Backend sends data to Frontend. (FETCH ALL USERS)
router.route('/login').post(authUser)
module.exports=router; 
 
