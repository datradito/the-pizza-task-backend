const express = require('express')
const Menu = require('../models/menu')
//const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/menu', async (req, res) => {
    const menu = new Menu({
        ...req.body
    })
    console.log(req.body)

    try{
        await menu.save()
        res.status(201).send(menu)
    } catch(e){
        res.status(400).send(e)
    }
})

module.exports = router