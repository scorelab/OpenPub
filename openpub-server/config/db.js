const mongoose = require('mongoose');
require('dotenv').config()


const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DB_CONNECTION_URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;