const crypto = require('crypto');

<<<<<<< HEAD
class HashService {
    hashOtp(data) {
        return crypto
            .createHmac('sha256', process.env.HASH_SECRET)
            .update(data)
            .digest('hex');
    }
}

module.exports = new HashService();
=======
class HashService{
    hashOtp(data) {
       return  crypto.createHmac('sha256', process.env.HASH_SECRET).update(data).digest('hex');
    }
}

module.exports = new HashService();
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973
