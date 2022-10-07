const { Prisma } = require("@prisma/client");
const prisma = require("../utils/prisma");

const createNewUser = async (req, res) => {
    console.log('hi tom');
    const { email, password } = req.body
    // console.log('req.body', req.body);

    if (!email || !password) {
        return res.status(400).json({
          error: "Missing fields in request body",
        });
      }

    const createdUser = await prisma.user.create({
        data: {
            email,
            password
        }
    })

    res.status(201).json({ user: createdUser})
    // res.status(500).json({ error: e.message });
}

const getAllUsers = async (req, res) => {
    console.log('hi tomus');

    const users = await prisma.user.findMany({

    })

    res.status(200).json({
        users
    })

}    
module.exports = {
    createNewUser,
    getAllUsers
}