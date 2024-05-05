import express from 'express';
import Multer from 'multer';
import cors from 'cors';

const app = express();
const multer = Multer({
  storage: Multer.memoryStorage(),
});

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.post('/upload', multer.single('file'), (req, res) => {
  res.send(req.file);
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})
