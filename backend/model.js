const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  companyLogo: {
    type: String,
    default: null, 
  },
  timeAgo: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  additionalDescription: {
    type: String,
    default: null, 
  },
  location: {
    type: String,
    required: true,
  }
}, {
  timestamps: true, 
});


const Jobs = mongoose.model('Job', jobSchema);

module.exports = Jobs;
