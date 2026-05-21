const books = [
  {
    title: "The Hobbit",
    author: "Tolkien",
    year: 1937,
    rating: 4.7,
    genres: ["Fantasy"],
  },
  {
    title: "1984",
    author: "Orwell",
    year: 1949,
    rating: 4.8,
    genres: ["Dystopian", "Political Fiction"],
  },
  {
    title: "The Name of the Wind",
    author: "Rothfuss",
    year: 2007,
    rating: 4.5,
    genres: ["Fantasy", "Adventure"],
  },
  {
    title: "Brave New World",
    author: "Huxley",
    year: 1932,
    rating: 4.2,
    genres: ["Dystopian"],
  },
  {
    title: "Dune",
    author: "Herbert",
    year: 1965,
    rating: 4.6,
    genres: ["Science Fiction", "Adventure"],
  },
  {
    title: "Fahrenheit 451",
    author: "Bradbury",
    year: 1953,
    rating: 4.3,
    genres: ["Dystopian", "Science Fiction"],
  },
  {
    title: "The Road",
    author: "McCarthy",
    year: 2006,
    rating: 4.0,
    genres: ["Post-Apocalyptic"],
  },
  {
    title: "To Kill a Mockingbird",
    author: "Lee",
    year: 1960,
    rating: 4.9,
    genres: ["Classic", "Coming-of-Age"],
  },
];
function getRecentBooks(books, afterYear) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].year > afterYear) {
      console.log(books[i].title);
    }
  }
}
function getAverageRating(books) {
  let totalRating = 0;
  for (let i = 0; i < books.length; i++) {
    totalRating += books[i].rating;
  }
  return (totalRating / books.length).toFixed(2);
}
console.log(getRecentBooks(books, 1950));
console.log(getAverageRating(books));
function sortBooksBy(books, key, asc = true) {
  return books.sort((a, b) => {
    if (asc) {
      return a[key] > b[key] ? 1 : -1;
    } else {
      return a[key] < b[key] ? 1 : -1;
    }
  });
}
function countGenres(books) {
  const acc = {};
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    for (let j = 0; j < book.genres.length; j++) {
      acc[book.genres[j]] = (acc[book.genres[j]] || 0) + 1;
    }
  }
  return acc;
}
function groupByAuthor(books) {
  const result = {};
  for (let i = 0; i < books.length; i++) {
    const author = books[i].author;
    if (!result[author]) {
      result[author] = [];
    }
    result[author].push(books[i]);
  }
  return result;
}
function hasHighlyRated(books, threshold) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].rating > threshold) {
      return true;
    }
  }
  return false;
}
function allBeforeYear(books, year) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].year >= year) {
      return false;
    }
  }
  return true;
}
function findByTitle(books, title) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].title === title) {
      return books[i];
    }
  }
  return undefined;
}
function isClassic(books) {
  arrIsClassic = [];
  for (let i = 0; i < books.length; i++) {
    arrIsClassic.push({
      ...books[i],
      isClassic: books[i].year < 1950,
    });
  }
  return arrIsClassic;
}
function dystopianBooks(books) {
  const result = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].genres.includes("Dystopian")) {
      result.push(books[i]);
    }
  }
  return result;
}
function hasKeyword(books, keyword) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].title.toLowerCase().includes(keyword.toLowerCase())) {
      return true;
    }
  }
  return false;
}
