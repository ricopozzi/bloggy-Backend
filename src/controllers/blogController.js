const mongoose = require('mongoose');
const blog = mongoose.model('Blog')
const mongoosePaginate = require('mongoose-paginate')

   const find =  async (req, res, next)=>{
    try{
        const body = await blog.find(req.body)
        console.log(body)
        res.json(body)
    }
     catch(err){
        next(err)
    }
    }

    const findById =  async (req, res, next)=>{
        try{
            const body = await blog.findById(req.params.id,req.body)
            console.log(body)
            res.json(body)
        }
         catch(err){
            next(err)
        }
        }

   const  create  = async (req, res ) =>{
        const product = await blog.create(req.body)
        
        return res.json(product)
      
    }



    const update = async(req, res, next)=>{
        try{
        const update = await blog.findByIdAndUpdate(req.params.id, req.body,{new:true})
        
        res.json(update);

        }catch(err){
            next(err)
        }
    }

    const destroy = async(req,res, next) =>{
        try {
        const destroy = await blog.findByIdAndRemove(req.params.id)
        
        res.json(destroy)

        } catch (err) {
            next(err)
        }


    }
    module.exports = {findById, create, find, update, destroy}