const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name:{
    type:String, 
    required: true
  }, 
  age:{
    type: Number, 
    required: true, 
  }, 
  type:{
    type: String,
    required: true, 
  },
  breed:{
    type: String, 
    required: true,
  }, 
  owner:{
    type:String, 
    
  },
  owner_tel:{
    type: String, 
    
  },


  
  
  
});

module.exports = mongoose.model('Animals', schema);