<<<<<<< HEAD
class UserDto {
    id;
    phone;
    name;
    avatar;
=======
class UserDto{
    _id;
    phone;
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973
    activated;
    createdAt;

    constructor(user) {
<<<<<<< HEAD
        this.id = user._id;
        this.phone = user.phone;
        this.name = user.name;
        this.avatar = user.avatar
            ? `${process.env.BASE_URL}${user.avatar}`
            : null;
        this.activated = user.activated;
        this.createdAt = user.createdAt;
    }
}

module.exports = UserDto;
=======
        this._id = user._id;
        this.phone = user.phone;
        this.activated = user.activated;
        this.createdAt = user.createdAt;
    }

}
module.exports = UserDto;
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973
