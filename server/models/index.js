const mongoose = require('mongoose');

// Model Schemas
const Leads = require('./leads'); ;

const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

const models = {
    Leads
};

module.exports = { models, connectDb };