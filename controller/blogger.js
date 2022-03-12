const bloggerModel =require ("../model/blogger")
const { ObjectID } = require("bson")
const httpStatus = require("http-status")
const error=require("../errors/errors")


const add_blog_detail = async(req, res,next) => {

    data = req.body
    console.log(data)
    try{
    let getdata = await bloggerModel.insertMany(data)
    if (getdata.error) {
        res.status(httpStatus.BAD_REQUEST).json({ message: getdata })
    } else {
        res.status(httpStatus.OK).json(getdata)
    }
}catch(err){
    next(err)
}

}

const blog_list = async(req, res, next) => {
   // data = req.body
    try {
        getdata = await bloggerModel.find()
        res.json(getdata)
    } catch (err) {
        next(err)
    }

}

const getById = async(req,res,next)=>{
    data=req.body
    try{
        getdata=await bloggerModel.findById({_id:ObjectID(data._id)})
        if(!getdata){
            res.json({message:"data not found"})

        }else{
        res.json(getdata)
        }
    }catch(err){
        next(err)
    }
    }


const update_blog = async(req, res, next) => {
    data = req.body
    qury = req.params.id
    try {
        getdata = await bloggerModel.updateOne({_id:ObjectID(qury)}, data)
        res.json({ message: "user updated successfully" })
    } catch (err) {
        next(err)
    }

}
const delete_blog = async(req, res, next) => {
    data = req.params.id
    try {
        getdata = await bloggerModel.deleteOne({ _id: ObjectID(data) })
        res.status(httpStatus.OK).json({ message: "data deleted successfully" })
    } catch (err) {
        next(err)
    }
}
module.exports = {
    add_blog_detail,
    blog_list,
    update_blog,
    delete_blog,
    getById
    
}