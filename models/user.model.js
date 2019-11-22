const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        minlength: 5
    },
    password: {
        type: String,
        required: true,
        minlength:  10,
        trim: true,
    },
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100,
        unique: true,
        trim: true,
    },
});

userSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(passord, bcrypt.genSaltSync(10))
}

userSchema.methods.validPassword = (password) => {
    return bcrypt.compareSync(password, this.password)
}

userSchema.pre('save', (next) => {
    if(this.isModified('password')){
        this.password = this.generateHash(this.password)
        next()
    }else {
        next()
    }
})

const User = mongoose.model("user", userSchema);

module.exports = User;