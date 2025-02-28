const mongo = require('mongoose');
const Schema = mongo.Schema;

const taskSchema = new Schema({
    user : { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true , unique: true },
    description: { type: String, required: true },
    isCompleted : { type: Boolean, required: true }
});

module.exports = mongo.model('Task', taskSchema);
