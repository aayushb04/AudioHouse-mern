const UserModel = require('../models/user-model');
class UserService {
    async findUser(filter) {
        const user = await UserModel.findOne(filter);
        return user;
    }

    async createUser(data) {
        const user = await UserModel.create(data);
        return user;
    }
}

<<<<<<< HEAD
module.exports = new UserService();
=======
module.exports = new UserService();
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973
