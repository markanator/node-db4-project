const db = require('../data/config');

// getRecipes
function getRecipes() {
	return db('recipes');
}
function getRecipesByID(recipe_id) {
	return db('recipes').where('id', recipe_id).first();
}

//  getShoppingList(recipe_id):
// should return a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {
	return db('recipe_ingredients AS RI')
		.leftJoin('recipes as R', 'R.id', 'RI.recipe_id')
		.leftJoin('ingredients as ING', 'ING.id', 'RI.ingredient_id')
		.where('R.id', recipe_id)
		.select('RI.qty', 'RI.amount AS measurement', 'ING.name AS ingredient');
}

// getInstructions(recipe_id):
// should return a list of step by step instructions for preparing a recipe
function getInstructions(recipe_id) {
	return db('recipes as R')
		.where('R.id', recipe_id)
		.leftJoin('steps as S', 'S.recipe_id', 'R.id')
		.select('R.name as Recipe', 'S.step_number', 'S.instructions')
		.orderBy('S.step_number', 'asc');
}

// fetches all recipes that use this ingredient
function getIngredient(ing_id) {
	return db('ingredients AS ING')
		.join('recipe_ingredients as RI', 'RI.ingredient_id', 'ING.id')
		.join('recipes as R', 'R.id', 'RI.recipe_id')
		.where('ING.id', ing_id)
		.select('R.name AS recipe');
}

module.exports = {
	getRecipes,
	getRecipesByID,
	getShoppingList,
	getInstructions,
	getIngredient,
};
