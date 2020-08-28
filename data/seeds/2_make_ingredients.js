exports.seed = async function (knex) {
	await knex('ingredients').insert([
		{ id: 1, name: 'russet potatoes, washed and dried' },
		{ id: 2, name: 'olive oil' },
		{ id: 3, name: 'coarse salt,' },
		{ id: 4, name: 'Old Bay seasoning' },
		{ id: 5, name: 'unsalted butter' },
		{ id: 6, name: 'brown sugar' },
		{ id: 7, name: 'honey' },
		{ id: 8, name: 'pure vanilla extract' },
		{ id: 9, name: 'cocoa powder' },
		{ id: 10, name: 'salt' },
		{ id: 11, name: 'oats' },
		{ id: 12, name: 'chopped almonds' },
		{ id: 13, name: 'chocolate chunks' },
	]);
};
