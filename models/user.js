const mongo = require('mongoose');
const Schema = mongo.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

module.exports = mongo.model('User', userSchema);