exports.seed = async function (knex) {
	await knex('steps').insert([
		// homade Chips
		{
			id: 1,
			step_number: 1,
			instructions:
				'Preheat the broiler on its low setting. (Note: If your broiler isn’t adjustable or is particularly intense, just preheat the oven to 475°F.) Place a roasting rack on a baking sheet.',
			recipe_id: 1,
		},
		{
			id: 2,
			step_number: 2,
			instructions:
				'Using a mandoline or a sharp knife, slice the potatoes very thinly--about ⅛-inch thick. In a large bowl, toss the potato slices with the olive oil, salt and Old Bay seasoning, if using.',
			recipe_id: 1,
		},
		{
			id: 3,
			step_number: 3,
			instructions:
				'Arrange the potatoes on the roasting rack (you may have to do a few batches, as the slices should be spread out so they can get crispy). Cook the potatoes until they’re crisp and golden brown, 5 to 7 minutes. Repeat with the remaining potatoes. Cool completely. Store in an airtight container for up to three days.',
			recipe_id: 1,
		},
		// GRANOLA
		{
			id: 4,
			step_number: 1,
			instructions:
				'Preheat the oven to 325°F. Line two baking sheets with parchment paper, and grease the paper with nonstick cooking spray.',
			recipe_id: 2,
		},
		{
			id: 5,
			step_number: 2,
			instructions:
				'In a medium pot set over low heat, combine the oil with the butter, brown sugar, honey, vanilla, cocoa powder and salt. Heat, stirring occasionally, until the mixture is smooth and fully combined.',
			recipe_id: 2,
		},
		{
			id: 6,
			step_number: 3,
			instructions:
				'In a large bowl, toss the oats with the almonds. Add the cocoa mixture and toss to combine.',
			recipe_id: 2,
		},
		{
			id: 7,
			step_number: 4,
			instructions:
				'Divide the mixture evenly between the two baking sheets and spread into an even layer. Bake until toasty and crisp, 45 minutes to 1 hour. Remove the baking sheets from the oven every 20 minutes or so and toss the granola with a spatula to make sure it’s toasting evenly.',
			recipe_id: 2,
		},
		{
			id: 8,
			step_number: 5,
			instructions:
				'Let cool to room temperature and then stir in the chocolate chunks. Transfer the finished granola to airtight containers; it will keep for up toa week.',
			recipe_id: 2,
		},
	]);
};
