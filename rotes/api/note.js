const express = require('express')
const router = express.Router()
const key = require('../../setup/myurl');

const Notes = require('../../models/notes')

//router.post('/new')

router.get('/',(req,res)=>{
    Notes.find({})
    .then(note=>{res.json(note)})
    .catch(err=>{console.log(err)})
})

router.post('/0',(req,res)=>{
    const mynote = new Notes({
        body : req.body.body
    })
    
    mynote.save()
    .then(note=>res.json({Success: "Successfully Added new note"}))
    .catch(err=>console.log(err))
})

router.get('/:id',(req,res)=>{
    Notes.findById(req.params.id)
    .then(note=>{
        res.json(note)
    })
    .catch(err=>{console.log(err)})
})

router.delete('/:id',(req,res)=>{
    Notes.findByIdAndDelete(req.params.id)
    .then(note=>{res.json({Success:"Successfully deleted"})})
    .catch(err=>console.log(err))
})

router.post('/:id',(req,res)=>{
    const note ={}
    note.body=req.body.body
    
    Notes.findByIdAndUpdate({_id:req.params.id},{ $set: note},{ new: true })
        .then(note=>{
                note.save().then(note=>res.json({Success: "Successfully Updated a note"})).catch(err=>console.log(err))
            })
        .catch(err=>console.log(err))
            
})
    

module.exports = router;