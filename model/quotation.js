const mongoose = require('mongoose');

const quotationSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }
});

const Quotations = mongoose.model('quotation', quotationSchema);

module.exports = Quotations;