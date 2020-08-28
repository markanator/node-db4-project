exports.seed = async function (knex) {
	await knex('recipes').insert([
		{ id: 1, name: 'Easy Homemade Potato Chips' },
		{ id: 2, name: 'Chocolate Granola' },
	]);
};
