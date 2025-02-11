const express = require("express");
const router = express.Router();

const books = [
  {
    isbn: "12345",
    title: "Book One",
    author: "Author A",
    reviews: ["Excellent read!", "Very informative."],
  },
  {
    isbn: "67890",
    title: "Book Two",
    author: "Author B",
    reviews: ["Not my taste.", "Great storytelling."],
  },
  {
    isbn: "11111",
    title: "The Great Adventure",
    author: "John Smith",
    reviews: ["Thrilling adventure.", "Loved the characters."],
  },
  {
    isbn: "22222",
    title: "Mystery of the Lost City",
    author: "Jane Doe",
    reviews: ["Kept me on the edge of my seat.", "Fantastic mystery novel."],
  },
  {
    isbn: "33333",
    title: "Science Explained",
    author: "Dr. Alan Grant",
    reviews: ["Very educational.", "Well-explained concepts."],
  },
  {
    isbn: "44444",
    title: "The Art of Cooking",
    author: "Chef Ramsey",
    reviews: ["Great recipes!", "Easy to follow."],
  },
  {
    isbn: "55555",
    title: "History Unveiled",
    author: "Emma Thompson",
    reviews: ["Fascinating insights.", "A must-read for history lovers."],
  },
  {
    isbn: "66666",
    title: "Secrets of the Universe",
    author: "Neil Tyson",
    reviews: ["Mind-blowing!", "Great introduction to astrophysics."],
  },
  {
    isbn: "77777",
    title: "The Code Master",
    author: "Linus Torvalds",
    reviews: ["Must-read for programmers.", "Very detailed explanations."],
  },
  {
    isbn: "88888",
    title: "AI and the Future",
    author: "Elon Musk",
    reviews: ["Futuristic vision.", "Exciting insights into AI."],
  },
  {
    isbn: "99999",
    title: "Journey to Mars",
    author: "Buzz Aldrin",
    reviews: ["Inspirational.", "Loved the real-world perspective."],
  },
  {
    isbn: "10101",
    title: "Fantasy Land",
    author: "J.K. Rowling",
    reviews: ["Magical experience.", "Amazing world-building."],
  },
  {
    isbn: "20202",
    title: "The Shadow Realm",
    author: "Stephen King",
    reviews: ["Creepy and thrilling.", "A page-turner."],
  },
  {
    isbn: "30303",
    title: "Hacker's Guide",
    author: "Kevin Mitnick",
    reviews: ["Great for cybersecurity enthusiasts.", "Very technical."],
  },
  {
    isbn: "40404",
    title: "Quantum Mechanics Simplified",
    author: "Richard Feynman",
    reviews: ["Hard to grasp but rewarding.", "Brilliant explanations."],
  },
  {
    isbn: "50505",
    title: "How to Build a Startup",
    author: "Paul Graham",
    reviews: ["Inspiring read.", "Practical advice for entrepreneurs."],
  },
  {
    isbn: "60606",
    title: "Psychology of Success",
    author: "Carol Dweck",
    reviews: ["Very motivational.", "Growth mindset explained well."],
  },
  {
    isbn: "70707",
    title: "The Power of Habit",
    author: "Charles Duhigg",
    reviews: ["Changed my perspective.", "Helpful insights on habits."],
  },
  {
    isbn: "80808",
    title: "Investing 101",
    author: "Warren Buffet",
    reviews: ["Good beginner guide.", "Simple yet effective."],
  },
  {
    isbn: "90909",
    title: "The Art of War",
    author: "Sun Tzu",
    reviews: ["Timeless wisdom.", "Still relevant today."],
  },
  {
    isbn: "11112",
    title: "The Lean Startup",
    author: "Eric Ries",
    reviews: ["Great for entrepreneurs.", "Lean methodology explained well."],
  },
  {
    isbn: "22223",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    reviews: ["Eye-opening financial advice.", "Very practical."],
  },
  {
    isbn: "33334",
    title: "Meditations",
    author: "Marcus Aurelius",
    reviews: ["Timeless philosophy.", "Great for self-improvement."],
  },
  {
    isbn: "44445",
    title: "Sapiens: A Brief History",
    author: "Yuval Noah Harari",
    reviews: ["Fascinating historical perspective.", "Thought-provoking."],
  },
  {
    isbn: "55556",
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    reviews: ["Very insightful.", "A deep dive into power dynamics."],
  },
  {
    isbn: "66667",
    title: "Deep Work",
    author: "Cal Newport",
    reviews: ["Great productivity strategies.", "A must-read for focus."],
  },
  {
    isbn: "77778",
    title: "Zero to One",
    author: "Peter Thiel",
    reviews: ["Innovative ideas.", "Unique take on startups."],
  },
  {
    isbn: "88889",
    title: "Crushing It!",
    author: "Gary Vaynerchuk",
    reviews: ["Very motivational.", "Great business insights."],
  },
  {
    isbn: "99990",
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    reviews: ["Best book on investing.", "Timeless principles."],
  },
  {
    isbn: "10110",
    title: "Hooked: How to Build Habit-Forming Products",
    author: "Nir Eyal",
    reviews: ["Very useful for product designers.", "Great case studies."],
  },
  {
    isbn: "20220",
    title: "Good to Great",
    author: "Jim Collins",
    reviews: ["Deep business insights.", "Highly recommended."],
  },
  {
    isbn: "30330",
    title: "Bad Blood",
    author: "John Carreyrou",
    reviews: ["Thrilling true story.", "Hard to put down."],
  },
  {
    isbn: "40440",
    title: "Atomic Habits",
    author: "James Clear",
    reviews: ["Best book on habits.", "Very practical advice."],
  },
  {
    isbn: "50550",
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    reviews: ["Refreshing perspective.", "Honest and direct."],
  },
  {
    isbn: "60660",
    title: "Start with Why",
    author: "Simon Sinek",
    reviews: ["Great leadership book.", "Very inspiring."],
  },
  {
    isbn: "70770",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    reviews: ["Deep dive into psychology.", "Challenging but rewarding."],
  },
];
// Get all books using an async callback function
router.get("/books", async (req, res, next) => {
    try {
      res.json(books);
    } catch (error) {
      next(error);
    }
  });
  
  // Search book by ISBN using Promises
  router.get("/books/isbn/:isbn", (req, res) => {
    const { isbn } = req.params;
  
    new Promise((resolve, reject) => {
      const book = books.find((b) => b.isbn === isbn);
      if (book) resolve(book);
      else reject("Book not found");
    })
      .then((book) => res.json(book))
      .catch((error) => res.status(404).json({ message: error }));
  });
  
  // Get books by author
  router.get("/books/author/:author", async (req, res, next) => {
    try {
      const { author } = req.params;
      const filteredBooks = books.filter((b) => b.author === author);
      res.json(filteredBooks);
    } catch (error) {
      next(error);
    }
  });
  
  // Get books by title
  router.get("/books/title/:title", async (req, res, next) => {
    try {
      const { title } = req.params;
      const filteredBooks = books.filter((b) => b.title === title);
      res.json(filteredBooks);
    } catch (error) {
      next(error);
    }
  });
  
  // Get book reviews by ISBN
  router.get("/books/review/:isbn", (req, res, next) => {
    try {
      const { isbn } = req.params;
      const book = books.find((b) => b.isbn === isbn);
  
      if (!book) return res.status(404).json({ message: "Book not found." });
  
      res.json({ reviews: book.reviews });
    } catch (error) {
      next(error);
    }
  });
  
  // Add a new review to a book
  router.post("/books/review/:isbn", (req, res, next) => {
    try {
      const { isbn } = req.params;
      const { review } = req.body;
  
      if (!review) return res.status(400).json({ message: "Review cannot be empty." });
  
      const book = books.find((b) => b.isbn === isbn);
  
      if (!book) return res.status(404).json({ message: "Book not found." });
  
      book.reviews.push(review);
      res.json({ message: "Review added successfully!", book });
    } catch (error) {
      next(error);
    }
  });
  
  // Delete a review by user
  router.delete("/books/review/:isbn/:user", async (req, res, next) => {
    try {
      const { isbn, user } = req.params;
      const book = books.find((b) => b.isbn === isbn);
  
      if (!book) return res.status(404).json({ message: "Book not found" });
  
      const initialLength = book.reviews.length;
      book.reviews = book.reviews.filter((r) => r.user !== user);
  
      if (book.reviews.length === initialLength) {
        return res.status(404).json({ message: "Review not found for this user" });
      }
  
      res.json({ message: "Review deleted successfully", book });
    } catch (error) {
      next(error);
    }
  });
  
  // User authentication
  const users = [];
  
  // Register a new user
  router.post("/register", (req, res, next) => {
    try {
      const { username, password } = req.body;
      if (users.find((u) => u.username === username)) {
        return res.status(400).json({ message: "User already exists" });
      }
      users.push({ username, password });
      res.json({ message: "User registered successfully" });
    } catch (error) {
      next(error);
    }
  });
  
  // Login user
  router.post("/login", (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = users.find((u) => u.username === username && u.password === password);
      if (user) {
        res.json({ message: "Login successful" });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      next(error);
    }
  });
  
  // Error handling middleware
  router.use((err, req, res, next) => {
    res.status(500).json({ message: "Internal server error", error: err.message });
  });
  
  module.exports = router;