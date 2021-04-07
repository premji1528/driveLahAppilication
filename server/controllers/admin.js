
/**
 * Csv dependency imports
 */
var fileSystem = require("fs");
var fastcsv = require("fast-csv");


/**
 * Application dependency imports
 */
const { models } = require('../models');
const { formateDate } = require("../config/commonHelpers")


/**
 * API getAllLeadCollections
 * Collect all leads as now and generate the consolidated report
 */
const getAllLeadCollections = async (req, res) => {
    try {

        let ListOfLeads = await models.Leads.find({}, function (err, leads) {
            return leads;
        });

        return res.status(200).json({ success: true, message:'Leads Fetched SuccessFully!', data: ListOfLeads });
    } catch (error) {
        return res.status(400).json({ success: false, message: error });
    }
};

const downloadLeads = async (req, res) => {
    try {
        let LeadCollections = [];
        
        await models.Leads.find({}, function (err, leads) {
            LeadCollections = leads.map((lead) => ({
                FullName: lead.fullname,
                Email: lead.email,
                Message: lead.message,
                contactedOn: lead.createdAt
            }));

            return LeadCollections;
        });

        const fileName = 'leadReport ' + formateDate(new Date()) + '.csv';
        var ws = fileSystem.createWriteStream("files/" + fileName);
        fastcsv
            .write(LeadCollections, { headers: true })
            .on("finish", function () {

                res.send("<a href='/files/" + fileName + "' download='" + fileName + "' id='download-link'></a><script>document.getElementById('download-link').click();</script>");
            })
            .pipe(ws);

    } catch (error) {
        return res.status(400).json({ success: false, message: error });
    }
};

module.exports = {
    getAllLeadCollections,
    downloadLeads
};