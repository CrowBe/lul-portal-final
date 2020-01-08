import express from 'express';
import cors from 'cors';
import router from './routes';

const app = express();

app.use(cors());

app.use(express.json())

app.use(router);

app.get('/', (req, res) => {
  console.log(req);
  res.send('Hello from App Engine!');
});

// Listen to the App Engine-specified port, or 3001 otherwise
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});