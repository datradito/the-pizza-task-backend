const express = require('express')
const Menu = require('../models/menu')
//const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/menu', async (req, res) => {
    const menu = new Menu({
        ...req.body
    })

    try{
        await menu.save()
        res.status(201).send(menu)
    } catch(e){
        res.status(400).send(e)
    }
})

router.get('/menu', async (req, res) => {
    try {
        Menu.find({}).then(pizzamenu=>res.send(pizzamenu))
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router