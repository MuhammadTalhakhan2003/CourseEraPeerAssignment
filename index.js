const express = require('express');
const app = express();
const booksRoutes = require('./routes'); // Correct import

app.use(express.json());

// Use the books router under '/api'
app.use('/api', booksRoutes);
app.use('/books/isbn/:isbn',booksRoutes)
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running at Port ${PORT}`);
});