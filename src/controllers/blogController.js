const mongoose = require('mongoose');
const blog = mongoose.model('Blog')

   const find =  async (req, res, next)=>{
    try{
        const blogy = await blog.find(req.body)
        res.json(blogy)
    } catch(err){
        next(err)
    }
    }

    const create = async (req, res, next)=>{
        try{
        const create = await blog.create(req.body)
        res.json(create)
       }catch(err){
        next(err)
       }
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
    module.exports = {create, find, update, destroy }