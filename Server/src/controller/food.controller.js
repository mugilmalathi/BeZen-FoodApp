const express = require("express");
const router = express.Router();
const Food = require("../model/food.model");

router.post("/food", async(req, res) => {
    try{
        const food = await Food.create(req.body);
        return res.status(201).send(food);
    }catch(err){
        return res.status(500).send({message: err.message}) 
    }
})

router.get("/food", async(req, res) => {
    try{
        const food = await Food.find().lean().exec();
        return res.status(201).send(food);
    }catch(err){
        return res.status(500).send({message: err.message}) 
    }
})

router.patch("/food/:id", async(req, res)=>{
    try{
        const food = await Food.findByIdAndUpdate(
            req.params.id,
            req.body,{
                new: true
            })
        return res.status(201).send(food);
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/food/:id", async(req, res)=>{
    try{
        const food = await Food.findByIdAndDelete(
            req.params.id
        )
        return res.status(201).send(food)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router;