import mongoose from "mongoose";

const suggestionSchema = new mongoose.Schema({
    Description:{type: String, required: true, ref:"budgets"}
})

const SuggestionModel = mongoose.model('Suggestion',suggestionSchema)

export default SuggestionModel;