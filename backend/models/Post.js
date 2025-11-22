const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  desc: {
    type: String,
    required: true
    // removed unique:true to allow duplicate descriptions
  },
  photo: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, // ✅ more scalable
    ref: 'User',
    required: true
  },
  categories: {
    type: [String] // cleaner than type:Array
  }
}, { timestamps: true }); // ✅ fixed typo here

module.exports = mongoose.model("Post", PostSchema);
