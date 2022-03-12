const express= require('express');
const Router = express.Router();
Router.use(express.json())

const schema = require('./schema');
const { requestValidator } = require('../middleware/request_validator');


const BloggerCon =require('../controller/blogger')
Router.post('/insertDetail',requestValidator(schema.create),BloggerCon.add_blog_detail)
Router.get('/getDetail',BloggerCon.blog_list)
Router.put('/updateDetail/:id',BloggerCon.update_blog)
Router.delete('/deleteDetail/:id',BloggerCon.delete_blog)
Router.get('/getbyid',BloggerCon.getById)

module.exports=Router