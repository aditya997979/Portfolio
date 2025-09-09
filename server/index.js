import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing fields' });
  }
  // Placeholder: Hook up email or DB later
  res.json({ ok: true });
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientBuildPath = path.join(__dirname, '..', 'client', 'dist');

app.use(express.static(clientBuildPath));
app.get('*', (req, res) => {
  try {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  } catch {
    res.status(404).send('Not built yet');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
