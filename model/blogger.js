const mongoose = require("mongoose")
const blogging_schema = mongoose.Schema({
    Title: {
        type: String
    },
    Author: {
        type: String
    },
    category_of_book: {
        type: String,
        required: true
    },
    Author_email:{
        type:String,
    }
    
})


const blog= mongoose.model('bloger', blogging_schema)
module.exports=blog