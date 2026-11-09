//This file (routes/messageRoutes.js) defines the API endpoints 
// for sending and fetching messages. It connects frontend requests to the message controllers you studied earlier.
const express=require('express')
const {sendMessage,allMessages}=require("../controllers/messageControllers")
const {protect}=require("../middleware/authMiddleware")
const router=express.Router()

router.route('/').post(protect,sendMessage);
router.route('/:chatId').get(protect,allMessages);
module.exports=router;

