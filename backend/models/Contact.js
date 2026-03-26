const mongoose = require('mongoose');

const emailRegex = /^\S+@\S+\.\S+$/;

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [emailRegex, 'Please enter a valid email']
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
      trim: true,
      minlength: [7, 'Phone number must be at least 7 characters']
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);
