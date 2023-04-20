import mongoose from "mongoose";
const txnSchema = new mongoose.Schema({
    U_id:{type: mongoose.Schema.Types.ObjectId, required: true,ref: 'users'},
    amount:{type: Number, required: true},
    Type:{type: String, required: true},
    Option:{type: String, required: false}

})

const TxnModel = mongoose.model('Txn',txnSchema)

export default TxnModel;