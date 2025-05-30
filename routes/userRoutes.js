const express= require('express')
const router = express.Router()

const { registerUser, loginUser, getAllUsers, updateUser,deleteUser } = require('../controllers/usersController')

router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/',getAllUsers)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)

module.exports=router