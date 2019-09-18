const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const functions = require('firebase-functions');
//const admin = require('firebase-admin');
const app = express();

const connURL = "mongodb+srv://zalza:Zalza19827136X@cluster0-6cls4.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(connURL);

mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('error', console.error.bind(console, "Connection error!"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/*
var serviceAccount = require("./retrocomputer-words-list-e63243a03fc2.json");

admin.initializeApp({
    projectId: 'retrocomputer-words-list',
    credential: admin.credential.cert(serviceAccount),
});
*/
const db_name = "RetroComputerWordsDB";

mongoose.connect(connURL, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true
}).then(() => {
	console.log('MongoDB Connected');
})
.catch(err => console.log("error"));

const cors = require('cors');
app.use(cors({ origin: true }));

app.get('/api', (req, res) => {

	res.send(

	);

});

exports.api = functions.https.onRequest(app);