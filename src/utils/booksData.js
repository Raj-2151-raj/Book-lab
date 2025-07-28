// 
// book-lab/src/utils/booksData.js
// This file contains the data for the books used in the application.

const booksData = [
  // Fiction (10 books)
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "fiction",
    rating: 4.6,
    description: "A journey of self-discovery.",
    coverImage: "https://covers.openlibrary.org/b/id/10515525-L.jpg"
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "fiction",
    rating: 4.8,
    description: "A novel of racial injustice and childhood innocence.",
    coverImage: "https://covers.openlibrary.org/b/id/11142570-L.jpg"
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    category: "fiction",
    rating: 4.7,
    description: "A dystopian novel of totalitarian control.",
    coverImage: "https://m.media-amazon.com/images/I/61HkdyBpKOL._UF1000,1000_QL80_.jpg"
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "fiction",
    rating: 4.6,
    description: "A romantic novel about manners and social standing.",
    coverImage: "https://covers.openlibrary.org/b/id/11150858-L.jpg"
  },
  {
    id: 5,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "fiction",
    rating: 4.5,
    description: "A critique of the American dream.",
    coverImage: "https://covers.openlibrary.org/b/id/10519184-L.jpg"
  },
  {
    id: 6,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    category: "fiction",
    rating: 4.4,
    description: "Teenage angst and rebellion.",
    coverImage: "https://covers.openlibrary.org/b/id/8228691-L.jpg"
  },
  {
    id: 7,
    title: "The Book Thief",
    author: "Markus Zusak",
    category: "fiction",
    rating: 4.7,
    description: "A story narrated by Death during WWII.",
    coverImage: "https://covers.openlibrary.org/b/id/10958349-L.jpg"
  },
  {
    id: 8,
    title: "Life of Pi",
    author: "Yann Martel",
    category: "fiction",
    rating: 4.6,
    description: "A young boy's survival journey with a tiger.",
    coverImage: "https://covers.openlibrary.org/b/id/9257551-L.jpg",
  },
  {
    id: 9,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    category: "fiction",
    rating: 4.8,
    description: "A story of friendship and redemption.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1541428344i/17165596.jpg", 
  },
  {
    id: 10,
    title: "The Shadow of the Wind",
    author: "Carlos Ruiz Zafón",
    category: "fiction",
    rating: 4.5,
    description: "A mystery set in post-war Barcelona.",
    coverImage: "https://covers.openlibrary.org/b/id/11114630-L.jpg"
  },

  // Non-Fiction (10 books)
  {
    id: 11,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "non-fiction",
    rating: 4.7,
    description: "A brief history of humankind.",
    coverImage: "https://covers.openlibrary.org/b/id/10594771-L.jpg"
  },
  {
    id: 12,
    title: "Educated",
    author: "Tara Westover",
    category: "non-fiction",
    rating: 4.8,
    description: "A memoir of transformation and learning.",
    coverImage: "https://covers.openlibrary.org/b/id/9257888-L.jpg"
  },
  {
    id: 13,
    title: "Atomic Habits",
    author: "James Clear",
    category: "non-fiction",
    rating: 4.9,
    description: "A guide to building better habits.",
    coverImage: "https://covers.openlibrary.org/b/id/10594774-L.jpg"
  },
  {
    id: 14,
    title: "Becoming",
    author: "Michelle Obama",
    category: "non-fiction",
    rating: 4.8,
    description: "A memoir by the former First Lady.",
    coverImage: "https://covers.openlibrary.org/b/id/9365074-L.jpg"
  },
  {
    id: 15,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    category: "non-fiction",
    rating: 4.7,
    description: "A guide to spiritual enlightenment.",
    coverImage: "https://covers.openlibrary.org/b/id/10529967-L.jpg"
  },
  {
    id: 16,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    category: "non-fiction",
    rating: 4.6,
    description: "A book on behavioral economics and psychology.",
    coverImage: "https://covers.openlibrary.org/b/id/10542982-L.jpg"
  },
  {
    id: 17,
    title: "Born a Crime",
    author: "Trevor Noah",
    category: "non-fiction",
    rating: 4.8,
    description: "A memoir of growing up in apartheid South Africa.",
    coverImage: "https://covers.openlibrary.org/b/id/8378240-L.jpg"
  },
  {
    id: 18,
    title: "Quiet",
    author: "Susan Cain",
    category: "non-fiction",
    rating: 4.6,
    description: "The power of introverts in a loud world.",
    coverImage: "https://covers.openlibrary.org/b/id/10542959-L.jpg"
  },
  {
    id: 19,
    title: "Man’s Search for Meaning",
    author: "Viktor E. Frankl",
    category: "non-fiction",
    rating: 4.9,
    description: "A Holocaust survivor’s reflections on life.",
    coverImage: "https://covers.openlibrary.org/b/id/11114607-L.jpg"
  },
  {
    id: 20,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    category: "non-fiction",
    rating: 4.5,
    description: "A counterintuitive approach to living a good life.",
    coverImage: "https://covers.openlibrary.org/b/id/10542983-L.jpg"
  },

  // Sci-Fi (10 books)
  {
    id: 21,
    title: "Dune",
    author: "Frank Herbert",
    category: "sci-fi",
    rating: 4.8,
    description: "Epic science fiction saga on desert planet Arrakis.",
    coverImage: "https://covers.openlibrary.org/b/id/11113321-L.jpg"
  },
  {
    id: 22,
    title: "Ender's Game",
    author: "Orson Scott Card",
    category: "sci-fi",
    rating: 4.7,
    description: "A young genius in a futuristic battle school.",
    coverImage: "https://covers.openlibrary.org/b/id/10526235-L.jpg"
  },
  {
    id: 23,
    title: "Neuromancer",
    author: "William Gibson",
    category: "sci-fi",
    rating: 4.5,
    description: "A cyberpunk novel that shaped the genre.",
    coverImage: "https://covers.openlibrary.org/b/id/9258762-L.jpg"
  },
  {
    id: 24,
    title: "The Martian",
    author: "Andy Weir",
    category: "sci-fi",
    rating: 4.8,
    description: "A stranded astronaut's struggle for survival.",
    coverImage: "https://covers.openlibrary.org/b/id/10526244-L.jpg"
  },
  {
    id: 25,
    title: "Foundation",
    author: "Isaac Asimov",
    category: "sci-fi",
    rating: 4.7,
    description: "The fall and rise of galactic civilization.",
    coverImage: "https://covers.openlibrary.org/b/id/10979848-L.jpg"
  },
  {
    id: 26,
    title: "Snow Crash",
    author: "Neal Stephenson",
    category: "sci-fi",
    rating: 4.6,
    description: "A fast-paced cyberpunk thriller.",
    coverImage: "https://covers.openlibrary.org/b/id/10526249-L.jpg"
  },
  {
    id: 27,
    title: "Brave New World",
    author: "Aldous Huxley",
    category: "sci-fi",
    rating: 4.5,
    description: "A dystopian vision of the future.",
    coverImage: "https://covers.openlibrary.org/b/id/10526797-L.jpg"
  },
  {
    id: 28,
    title: "Hyperion",
    author: "Dan Simmons",
    category: "sci-fi",
    rating: 4.7,
    description: "Pilgrims journey to the world of Hyperion.",
    coverImage: "https://covers.openlibrary.org/b/id/11113346-L.jpg"
  },
  {
    id: 29,
    title: "Ready Player One",
    author: "Ernest Cline",
    category: "sci-fi",
    rating: 4.6,
    description: "A virtual reality treasure hunt.",
    coverImage: "https://covers.openlibrary.org/b/id/10526243-L.jpg"
  },
  {
    id: 30,
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    category: "sci-fi",
    rating: 4.5,
    description: "An exploration of gender and society.",
    coverImage: "https://covers.openlibrary.org/b/id/10526252-L.jpg"
  }
];

export default booksData;
