const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  maritalStatus: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  bankAccount: {
    type: String,
    required: true,
  },
  registration: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  }
}, { timestamps: true, toJSON: { virtuals: true } });

UserSchema.virtual('image_url').get(function () {
  return this.filename === 'a' 
    ? 'https://picsum.photos/100/100' 
    : `http://localhost:${process.env.PORT}/files/images/${this.filename}`
})

UserSchema.pre('save', async function(next) {
  let { password } = this;
  this.password = await bcrypt.hash(password, 8);

  next();
});

UserSchema.pre('findOneAndUpdate', async function(next) {
  let { password } = this._update;
  
  if(password) this._update.password = await bcrypt.hash(password, 8);

  next();
})

module.exports = mongoose.model('User', UserSchema);