const User = require("../model/user");

// GET ALL USERS BY EMAIL
const getAllUsers = async(req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getOneUser = async (req, res) => {
    try {
        const userId = req.params.id; // Assuming the user ID is passed as a parameter in the request URL

        // Use the findById method to find a user by ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// POST A NEW USER 
const createUser = async(req, res) => {
    const user = req.body;
    const query = { email: user.email, password: user.password }
    try {
        const existingUser = await User.findOne(query);
        if(existingUser) {
            return res.status(302).json({message: "User already exists!"});
        }
        const result = await User.create(user);
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// DELETE A USER 
const deleteUser = async(req, res) => {
    const userId = req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        // if user not found
        if(!deletedUser) {
            return res.status(404).json({message: "User not found!"});
        }
        res.status(200).json({message: "User deleted Successfully!"})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
// GET ADMIN
const getAdmin = async(req, res) => {
    const email = req.params.email;
    const query = {email: email};
    try {
        const user = await User.findOne(query);
        if(email !== req.decoded.email) {
            return res.status(403).send({message: "Forbidden Access"})
        }
        let admin = false;
        if(user) {
            admin = user?.role === "admin";
        }
        res.status(200).json({admin})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
// MAKE ADMIN OF A USER 
const makeAdmin = async(req, res) => {
    const userId = req.params.id;
    const {name, email, photoURL, role} = req.body;
    try {
        const updatedUser = await User.findByIdAndDelete(
            userId,
            {role: "admin"},
            {new: true, runValidators: true}
        );
        if(!updatedUser) {
            return res.status(404).json({message: "User not found!"})
        }
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json({message: error.message});        
    }
}

module.exports = {
    getAllUsers,
    createUser,
    deleteUser,
    getAdmin,
    makeAdmin,
    getOneUser,
}