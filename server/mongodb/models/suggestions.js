import mongoose from "mongoose";

const suggestionSchema = new mongoose.Schema({
    Sugg_key:{type: String, required: true},
    Description:{type: String, required: true, ref:"Budget"}
})

const SuggestionModel = mongoose.model('Suggestion',suggestionSchema)

export default SuggestionModel;