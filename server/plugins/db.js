module.exports = app => {
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://127.0.0.1:27017/nongyao', {
        useNewUrlParser: true
    }).then(() => console.log("Connection Successful"))
    .catch(err => console.log(err));
}