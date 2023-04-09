import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema({
    U_id:{type: mongoose.Schema.Types.ObjectId, required: true,ref: 'users',unique: true},
    balance:{type: Number, required: true},
    Target_amnt:{type: Number, required: true},
    Suggestions:{type: String, required: false}

})

const BudgetModel = mongoose.model('Budget',budgetSchema)

export default BudgetModel;