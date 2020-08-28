const express = require('express');
// const helmet = require('helmet');
const bookRouter = require('./routes/recipes-route');

const server = express();
const port = process.env.PORT || 6969;
// 3rd party middlwares
// server.use(helmet());
server.use(express.json());

// CUSTOM ROUTES
server.get('/', (req, res) => {
	res.json({
		msg: 'Welcome to The Cook Book AKA Node DB4 Project!',
	});
});
server.use('/api', bookRouter);

// ERROR HANDLING
server.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({
		message: 'Something went wrong',
	});
});

// Server Listening
server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`);
});
