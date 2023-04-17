import styles from './style.css';

function Library() {
    this.books = [];
}

Library.prototype.addBook = function (newBook) {
    this.books.push(newBook);
};

Library.prototype.findBook = function (title)  {

   return this.books.findIndex(book => {return book.title === title});
}


Library.prototype.remove = function (bookIndex)  {

        this.books.splice(bookIndex, 1);
}

const library = new Library();

/**
 * Represent a book
 * @constructor
 * @param {string} title
 * @param  {string} author
 * @param {number} pages
 * @param {boolean} read
 * @constructor
 */
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

/*EXAMPLE BOOK*/
const hobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
const epine = new Book("Le chevalier aux épines", "J-P Jaworski", 528, true);


library.addBook(hobbit);
library.addBook(epine);

/* DOM Manipulation*/
const bookContainers = document.querySelector(".books-containers");
const newBookBtn = document.getElementById("btn-new-book");
const modalContainer = document.getElementById("modal-container");
const addBookBtn = document.getElementById("addBookModalBtn");
const addBookForm = document.getElementById("modalForm");

/*MODAL*/
const activeModal = () => {
    modalContainer.classList.add('active');
};
const closeModal = () => {
    modalContainer.classList.remove('active');
};

addBookForm.addEventListener("submit", (e) => {
    submitNewBook(e);
});

const submitNewBook = (e) => {

    e.preventDefault();
    const form = new FormData(addBookForm);
    const title = form.get("title").toString().trim();
    if (title === "") {
        return;
    }
    const author = form.get("author").toString().trim();
    const pages = Number(form.get("pages"));
    if (isNaN(pages)) {
        return;
    }
    const read = Boolean(form.get("read"));
    const newBook = new Book(title, author, pages, read);
    createBookCard(newBook);
    addBookForm.reset();
    closeModal();
};


newBookBtn.addEventListener("click", activeModal, false);

/*Book grid*/
const createBookCard = (book) => {
    const bookCard = document.createElement('div');
    const bookDescription = document.createElement('div');
    const title = document.createElement('h4');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const readLabel = document.createElement('label');
    const readInput = document.createElement("input");
    const slider = document.createElement("span");
    const deleteBtn = document.createElement("button");

    readLabel.classList.add("switch");
    readInput.type = "checkbox";
    slider.classList.add("slider","round");
    deleteBtn.classList.add('btn-del');
    bookCard.classList.add('book-card');
    bookDescription.classList.add('book-description');

    title.textContent = book.title;
    author.textContent = `by ${book.author}`;
    pages.textContent = `${book.pages} pages`;
    deleteBtn.textContent = "remove";

    deleteBtn.onclick = removeBook;
    if(book.read){
        readInput.checked = true;
    }
    readInput.onclick = toggleRead;

    readLabel.appendChild(readInput);
    readLabel.appendChild(slider);

    bookDescription.appendChild(title);
    bookDescription.appendChild(author);
    bookDescription.appendChild(pages);
    bookDescription.appendChild(readLabel);

    bookCard.appendChild(bookDescription);
    bookCard.appendChild(deleteBtn);
    bookContainers.appendChild(bookCard);
};

const updateBookCards = () => {
    bookContainers.innerHTML = "";
    for (const book of library.books){
        createBookCard(book);
    }
}

const toggleRead = (e) =>{

    const title = e.currentTarget.parentNode.parentNode.firstChild.firstChild.textContent;
    const book = library.findBook(title);
    library.books[book].read = !library.books[book].read;
}

const removeBook = (e) => {
   const title = e.currentTarget.parentNode.firstChild.firstChild.textContent;
   const book = library.findBook(title);
    console.log(library.books);
   library.remove(book);
    console.log(library.books);
   updateBookCards();
}

for (const book of library.books) {
    createBookCard(book);
}



