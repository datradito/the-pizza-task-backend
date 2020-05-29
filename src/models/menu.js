const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    pizzas:[
        {
            description: {
                type: String,
                required: true,
                trim: true
            },
            price: {
                type: Number,
                required: true,
                trim: true
            }
        }
    ]
})

const Menu = mongoose.model('Menu', menuSchema)

module.exports = Menu