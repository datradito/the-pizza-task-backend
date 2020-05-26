const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Brenda',
    email: 'Brenda@example.com',
    password: 'Brenda1234!!',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: 'Agustin',
    email: 'Agustin@example.com',
    password: 'agustin099@@',
    tokens: [{
        token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
    }]
}

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    order: [{
        description: 'Pizza Napolitana',
        units: 5,
        price: 10.89
    },
    {
        description: 'Pizza Margherita',
        units: 3,
        price: 11.89
    }],
    completed: false,
    owner: userOne._id
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    order: [{
        description: 'Pizza Buenos Aires',
        units: 5,
        price: 10.89
    },
    {
        description: 'Pizza Munich',
        units: 3,
        price: 11.89
    }],
    completed: true,
    owner: userOne._id
}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    order: [{
        description: 'Pizza Fugazeta',
        units: 5,
        price: 10.89
    },
    {
        description: 'Pizza Basic',
        units: 3,
        price: 11.89
    }],
    completed: true,
    owner: userTwo._id
}

const setupDatabase = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
}

module.exports = {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase
}