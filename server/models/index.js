const mongoose = require('mongoose');

// Model Schemas
const Leads = require('./leads'); ;

const connectDb = () => {
    console.log('::::', process.env.DATABASE_URL)
    return mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

const models = {
    Leads
};

module.exports = { models, connectDb };