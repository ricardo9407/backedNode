const db = require('mongoose');
const Model = require('./model');
const URI = "mongodb+srv://db_user_ricardo:Aptx-4869@cluster0.gulgo.mongodb.net/telegrom?retryWrites=true&w=majority"

db.Promise = global.Promise;
db.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log('[db] Conectada con exito');

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

function getMessage () {
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessage
    //get
    //update
    //delete
}