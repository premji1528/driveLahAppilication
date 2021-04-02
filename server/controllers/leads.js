const { models } = require('../models');

const postNewLead = async (req, res) => {
    try {
        const reqBody = {
            ...req.body,
            // Oprtional Values can be parsed here...
        };

       const dbReq = new models.Leads(reqBody);
        const LeadData = await dbReq.save();
       return res.status(200).json({ success: true, message: "Lead Created SuccessFully!", data: LeadData });
    } catch (error) {
        return res.status(200).json({ success: false, message: error });
    }
};

module.exports = {
    postNewLead
};