const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('dist'));

const PORT = process.env.PORT || 3000;

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`Server is up on port: ${PORT}`);
});
