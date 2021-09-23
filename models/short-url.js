const mongoose = require('mongoose')
const shorId = require('shortid')

const shortUrlSchema = mongoose.Schema({
    full: {
        type: String, 
        require: true
    },
    short: {
        type: String,
        require: true,
        default: shorId.generate
    },
    clicks: {
        type: Number,
        require: true,
        default: 0
    }

})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)