// Elements
const bookContainer = document.getElementById("book-container");
const newBookAdd = document.getElementById("new-book");

// form Elements
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const author = document.getElementById("author");
const release = document.getElementById("release");
const excerpt = document.getElementById("excerpt");

// initial Array
const myLibrary = [];

// Constructor
function Book(title, cover, author, release, excerpt) {
  this.title = title;
  this.cover = cover;
  this.author = author;
  this.release = release;
  this.excerpt = excerpt;

  // this.info = function () {
  //   return `${title} by ${author}, ${pages}, ${
  //     read ? "Completed" : "not read yet"
  //   }`;
  // };
}

function addBookToLibrary(title, cover, author, release, excerpt) {
  const newBook = new Book(title, cover, author, release, excerpt);
  myLibrary.push(newBook);
}

// Temp DAta

addBookToLibrary(
  "Dune",
  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
  "Frank Herbert",
  "Release date: June 1, 1965",
  "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble"
);

addBookToLibrary(
  "1984",
  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg",
  "George Orwell",
  "Release date: June 8, 1949",
  "The new novel by George Orwell is the major work towards which all his previous writing has pointed"
);

addBookToLibrary(
  "The Martian",
  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1413706054i/18007564.jpg",
  "Andy Weir",
  "Release date: September 27, 2011",
  "Six days ago, astronaut Mark Watney became one of the first people to walk on Mars"
);

addBookToLibrary(
  "Dark Matter ",
  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1472119680i/27833670.jpg",
  "Blake Crouch",
  "Release date: July 26, 2016",
  "A mindbending, relentlessly surprising thriller from the author of the bestselling Wayward Pines trilogy"
);

addBookToLibrary(
  "Project Hail Mary",
  "https://bestseller.com.ru/static/uploads/posts/2021-05/1621244505_project_hail_mary.webp",
  "Andy Weir",
  "Release date: May 4, 2021",
  "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish"
);

addBookToLibrary(
  "The Lean Startup",
  "https://kbimages1-a.akamaihd.net/5c5e77cc-1fb9-410b-a735-de95a9a5dd40/1200/1200/False/the-lean-startup-1.jpg",
  "Eric Ries",
  "Release date: January 1, 2011",
  "Most startups fail. But many of those failures are preventable. The Lean Startup is a new"
);

// book HTML CARD
function createCard(title, cover, author, release, excerpt) {
  const bookElement = `
  <div class="border-2 border-gray-50 flex p-2">
    <div class="mr-5 max-w-[125px]">
      <img
        src="${cover}"
        alt=""
      />
    </div>
    <div class="flex flex-col gap-2">
      <h2 class="font-semibold text-xl">
        ${title}
      </h2>
      <h3 class="font-semibold text-sm">by ${author}</h3>
      <p class="text-gray-400 text-sm">${release}</p>
      <p class="text-sm">
        ${excerpt}
        <a href="#" class="text-green-500">...more</a>
      </p>
    </div>
  </div>
  `;

  return bookElement;
}

// add new book to the array
newBookAdd.addEventListener("click", () => {
  const bookTitle = title.value;
  const bookCover = cover.value;
  const bookAuthor = author.value;
  const bookRelease = release.value;
  const bookExcerpt = excerpt.value;

  const bookElement = createCard(
    bookTitle,
    bookCover,
    bookAuthor,
    bookRelease,
    bookExcerpt
  );
  const div = document.createElement("div");
  div.innerHTML = bookElement;

  bookContainer.prepend(div);
});

// Get book data from myLibrary array and render on the dom.
function renderBooks() {
  myLibrary.forEach((book) => {
    const bookElement = createCard(
      book.title,
      book.cover,
      book.author,
      book.release,
      book.excerpt
    );
    const div = document.createElement("div");
    div.innerHTML = bookElement;

    bookContainer.prepend(div);
  });
}

renderBooks();
