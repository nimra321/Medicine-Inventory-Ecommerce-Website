const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const userSchema  = new Schema({

//      name: String,
//      email: {
//         type: String,
//         trim: true,
//         minlength: 3
//      },
//      photoURL: String,
//      role: {
//         type: String,
//         enum: ['user', 'admin'],
//         default: 'user'
//      }, 
//      password: String,

// });

// const User = mongoose.model('User', userSchema)

// module.exports = User;


const userSchema = new mongoose.Schema({
   username: { type: String, required: true, unique: true },
   password: { type: String, required: true },
   email: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);  