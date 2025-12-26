import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Recipe title is required"],
      trim: true
    },
    ingredients: {
      type: [String],
      required: [true, "Ingredients are required"]
    },
    instructions: {
      type: String,
      required: [true, "Instructions are required"]
    },
    cookingTime: {
      type: Number,
      min: 1
    }
  },
  { timestamps: true }
);

// ✅ CREATE MODEL
const Recipe = mongoose.model("Recipe", recipeSchema);

// ✅ EXPORT MODEL
export default Recipe;
