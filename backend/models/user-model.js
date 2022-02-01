const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        phone: { type: String, required: true },
<<<<<<< HEAD
        name: { type: String, required: false },
        avatar: { type: String, required: false },
=======
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973
        activated: { type: Boolean, required: false, default: false },
    },
    {
        timestamps: true,
    }
);

<<<<<<< HEAD
module.exports = mongoose.model('User', userSchema, 'users');
=======
module.exports = mongoose.model('User', userSchema, 'users');
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973
