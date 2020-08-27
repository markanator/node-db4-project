const express = require('express');
const helmet = require('helmet');

const server = express();
const port = process.env.PORT || 4000;
// 3rd party middlwares
server.use(helmet());
server.use(express.json());
// CUSTOM ROUTES

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
