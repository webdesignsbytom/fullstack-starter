const express = require("express");
const {
    getAllUsers,
    registerNewUser
} = require('../controllers/users');

const router = express.Router();

router.get('/', getAllUsers)
router.post('/', registerNewUser)

module.exports = router;
