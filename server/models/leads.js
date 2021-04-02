const mongoose = require('mongoose')

const leadSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: false,
    }
  },
  { timestamps: true },
);

const leads = mongoose.model('Leads', leadSchema);
module.exports = leads;
