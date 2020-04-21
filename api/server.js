import express from 'express';
import cors from 'cors';
import routes from "./routes/index";
import mongoose from 'mongoose';
require('dotenv').config()

mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

mongoose.connection.on("error", error => console.log(error));

// Create a new Express app
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Accept cross-origin requests from the frontend app
app.use(cors({ origin: ['http://localhost:3000', 'https://lookinguplandscapes.com.au'] }));

// Define an endpoint that must be called with an access token
app.use(routes);

// Start the app
app.listen(3001, () => console.log('API listening on 3001'));