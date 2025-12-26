import express from "express"
import { createRecipe, getRecipes, getrecipesById, updateRecipe, deleteRecipe } from "../Controllers/recipeController.js";

const router= express.Router();

router.post("/create",createRecipe);
router.get("/getdata",getRecipes);
router.get("/getdata/:recipeid",getrecipesById);
router.put("/update/:recipeid",updateRecipe);
router.delete("/delete/:recipeid",deleteRecipe);



export default router;