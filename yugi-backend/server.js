const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const upload = multer({ dest: 'uploads/' });

let cards = [];
const cardsFile = path.join(__dirname, 'cards.json');
const aboutFile = path.join(__dirname, 'about.json');

// Load cards from file
if (fs.existsSync(cardsFile)) {
  cards = JSON.parse(fs.readFileSync(cardsFile));
}

// Upload image
app.post('/api/upload', upload.single('image'), (req, res) => {
  res.json({ imageUrl: `/uploads/${req.file.filename}` });
});

// Add card
app.post('/api/cards', (req, res) => {
  const card = { ...req.body, id: Date.now() };
  cards.push(card);
  fs.writeFileSync(cardsFile, JSON.stringify(cards));
  res.json(card);
});

// Get cards
app.get('/api/cards', (req, res) => {
  res.json(cards);
});

// Get About info
app.get('/api/about', (req, res) => {
  if (fs.existsSync(aboutFile)) {
    const about = JSON.parse(fs.readFileSync(aboutFile));
    res.json(about);
  } else {
    res.json({ text: '', image: '' });
  }
});

// Update About info
app.post('/api/about', upload.single('image'), (req, res) => {
  let about = { text: req.body.text };
  if (req.file) {
    about.image = `/uploads/${req.file.filename}`;
  } else if (req.body.image) {
    about.image = req.body.image;
  }
  fs.writeFileSync(aboutFile, JSON.stringify(about));
  res.json(about);
});

// Start server
app.listen(5000, () => console.log('Server running on port 5000'));
