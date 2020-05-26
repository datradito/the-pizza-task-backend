const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    order:[
        {
            description: {
                type: String,
                required: true,
                trim: true
            }
        ,
        
            units:{
                type: Number,
                required: true,
                trim: true
            }
        ,
        
            price:{
                type: Number,
                required:true,
                trim:true
            }
        }
    ],
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task