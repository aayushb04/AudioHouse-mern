const mongoose = require('mongoose');
function DbConnect() {
    const DB_URL = process.env.DB_URL;
    // Database connection
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
<<<<<<< HEAD
        useUnifiedTopology: true,
        useFindAndModify: false,
=======
        // useUnifiedTopology: true,
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('DB connected...');
    });
}

<<<<<<< HEAD
module.exports = DbConnect;
=======
module.exports = DbConnect;
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973
