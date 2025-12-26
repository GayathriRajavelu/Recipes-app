import Recipe from "../Models/recipes.js";

// creating a new recipe
export const createRecipe = async (req, res) => {
  try {
    // ✅ USE THE CORRECT MODEL NAME
    const newRecipe = new Recipe(req.body);
    const savedRecipe = await newRecipe.save();

    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(400).json({
      message: "Cannot add the recipe",
      error: error.message
    });
  }
};

//Get products
export const getRecipes = async (req, res) => {
  try {
    const getrecipes = await Recipe.find();
    res.status(200).json({message: "Recipes Retrieved Successfully", data: getrecipes});
  } catch (error) {
    res.status(503)
    .json({message: "Cannot get recipes",error: error.message});
  }
};

// get Recipes by id

export const getrecipesById = async (req, res) => {

  try {
    const { recipeid } = req.params;
    const recipeDetail = await Recipe.findById(recipeid);
    if (!recipeDetail) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({ message: "Recipe Retrieved Successfully", data: recipeDetail });
  } catch (error) {
    res.status(503).json({ message: "Cannot get recipe", error: error.message });
  }
};

//Update Recipe

export const updateRecipe = async (req, res) => {
  try {
    const { recipeid } = req.params;
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      recipeid,
      req.body,
      { new: true }
    );
    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json({ message: "Recipe Updated Successfully", data: updatedRecipe });
  } catch (error) {
    res.status(503).json({ message: "Cannot update recipe", error: error.message });
  }
};

//Delete Recipe

export const deleteRecipe = async (req, res) => {
  try {
    const { recipeid } = req.params;
    const deletedRecipe = await Recipe.findByIdAndDelete(recipeid);
    if (!deletedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    const recipes = await Recipe.find();
    res.status(200).json({ message: "Recipe Deleted Successfully", data: recipes });
  } catch (error) {
    res.status(503).json({ message: "Cannot delete recipe", error: error.message });
  }
};
