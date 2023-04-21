import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
    U_id:{type: String, required: true},
    Description:{type: String, required: false},
})

const ComplaintModel = mongoose.model('Complaint',complaintSchema)

export default ComplaintModel;