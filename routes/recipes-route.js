const express = require('express');
const bookDB = require('../models/book');

const router = express.Router();

// routes
router.get('/recipes', async (req, res, next) => {
	try {
		const recipes = await bookDB.getRecipes();
		res.status(200).json(recipes);
	} catch (e) {
		next(e);
	}
});
router.get('/recipes/:id', async (req, res, next) => {
	try {
		const recipe = await bookDB.getRecipesByID(req.params.id);
		res.status(200).json(recipe);
	} catch (e) {
		next(e);
	}
});
router.get('/recipes/:id/instructions', async (req, res, next) => {
	try {
		const steps = await bookDB.getInstructions(req.params.id);
		res.status(200).json(steps);
	} catch (e) {
		next(e);
	}
});
router.get('/recipes/:id/shoppingList', async (req, res, next) => {
	try {
		const list = await bookDB.getShoppingList(req.params.id);
		res.status(200).json(list);
	} catch (e) {
		next(e);
	}
});
router.get('/ingredient/:id/recipes', async (req, res, next) => {
	try {
		const recipesThatInclude = await bookDB.getIngredient(req.params.id);
		res.status(200).json(recipesThatInclude);
	} catch (e) {
		next(e);
	}
});

// exports
module.exports = router;
