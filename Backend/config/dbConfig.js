const mongoose = require('mongoose');
function dbconnection() {
    mongoose.connect('mongodb+srv://antor945:antor12345antor@cluster0.3rru4al.mongodb.net/OlibaEcommrce?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => console.log('Connected!'));
}

module.exports = dbconnection;