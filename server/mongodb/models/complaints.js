import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
    username:{type: String, required: true,ref: 'User'},
    Complaint_id:{type: Number, required: true,unique: true},
    Description:{type: String, required: false},
})

const ComplaintModel = mongoose.model('Complaint',complaintSchema)

export default ComplaintModel;