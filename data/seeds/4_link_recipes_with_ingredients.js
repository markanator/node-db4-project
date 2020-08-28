exports.seed = async function (knex) {
	await knex('recipe_ingredients').insert([
		// homade chips
		{ recipe_id: 1, ingredient_id: 1, qty: 4.0, amount: 'whole' },
		{ recipe_id: 1, ingredient_id: 2, qty: 0.25, amount: 'cup' },
		{ recipe_id: 1, ingredient_id: 3, qty: 1.0, amount: 'tablespoon' },
		{ recipe_id: 1, ingredient_id: 4, qty: 1.0, amount: 'tablespoon' },
		// granola
		{ recipe_id: 2, ingredient_id: 2, qty: 0.5, amount: 'cup' },
		{ recipe_id: 2, ingredient_id: 5, qty: 2.0, amount: 'tablespoons' },
		{ recipe_id: 2, ingredient_id: 6, qty: 0.5, amount: 'cup' },
		{ recipe_id: 2, ingredient_id: 7, qty: 0.25, amount: 'cup' },
		{ recipe_id: 2, ingredient_id: 8, qty: 1.0, amount: 'teaspoon' },
		{ recipe_id: 2, ingredient_id: 9, qty: 0.33, amount: 'cup' },
		{ recipe_id: 2, ingredient_id: 10, qty: 0.75, amount: 'teaspoon' },
		{ recipe_id: 2, ingredient_id: 11, qty: 4.5, amount: 'cups' },
		{ recipe_id: 2, ingredient_id: 12, qty: 1.5, amount: 'cups' },
		{ recipe_id: 2, ingredient_id: 13, qty: 2.0, amount: 'cups' },
	]);
};
