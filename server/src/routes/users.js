const express = require("express");
const {
    createNewUser,
    getAllUsers,
    editProfile
} = require('../controllers/users');

const router = express.Router();

router.post('/', createNewUser)
router.get('/', getAllUsers)
router.patch('/:id/profile', editProfile)

module.exports = router;
