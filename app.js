import express from 'express';
import initializers from './src/server/initializers';

const app = express();
let config = require('config');

// set static stuff
app.use(express.static('dist'));
app.use(express.static('src/client'));

// Initialize dependencies for your app
initializers(app, express, config);
const port = process.env.PORT || config.port;
app.listen(port, (err) => {
	if (!err) {
		console.log('==========================================================================================');
		console.log(`Application is running in "${process.env.NODE_ENV}" environment via http://${config.host}:${port}`);
		console.log('==========================================================================================');
	} else {
		console.log(err);
	}
});
