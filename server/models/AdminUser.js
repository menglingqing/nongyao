const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username: { type: String },
    select: false,
    password: { type: String, set(val) {
        return require('bcrypt').hashSync(val, 10)
    } },
})

module.exports = mongoose.model('AdminUser', schema)