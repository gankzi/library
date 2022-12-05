let form = document.querySelector(".form-container");
let library = document.querySelector("#book-container");
let titleInput = document.querySelector("#book-title");
let authorInput = document.querySelector("#book-author");
let pagesInput = document.querySelector("#book-pages");
let readInput = document.querySelector("#read-or-not");
let createBook = document.querySelector(".create-btn");

createBook.addEventListener("click", addBookToLibrary);

let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
 };
}

function addBookToLibrary(event) {
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = readInput.checked; 

    event.preventDefault();

    if (read ==  true ) {
        read = "Read";
    } else {
        read = "Not read";
    }

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    
    populateBooks();
    clearForm();
    closeForm();
}


function openForm() {
    document.querySelector("#new-book").style.display = "block";
}

function closeForm() {
    document.querySelector("#new-book").style.display = "none";
}

function populateBooks() {
    
        const cards = document.querySelectorAll(".card");
        cards.forEach(card => library.removeChild(card));


        for(i = 0; i < myLibrary.length; i++) {
        const cardDiv = document.createElement("div");
        const title = document.createElement("h4");
        const author = document.createElement("h4");
        const pages = document.createElement("h4");
        const read = document.createElement("button");
        const deleteBk = document.createElement("button");

        read.classList.add("read-toggle");
        read.setAttribute("id", i);
        read.addEventListener("click", toggleRead);
        deleteBk.textContent = "Delete";
        deleteBk.classList.add("del-book");
        deleteBk.addEventListener("click", deleteBook)
        cardDiv.classList.add("card");
        cardDiv.setAttribute("id", i);
        deleteBk.setAttribute("id", i);

        title.textContent = myLibrary[i].title;
        author.textContent = myLibrary[i].author;
        pages.textContent = myLibrary[i].pages;
        read.textContent = myLibrary[i].read;

        library.appendChild(cardDiv);
        cardDiv.appendChild(title);
        cardDiv.appendChild(author);
        cardDiv.appendChild(pages);
        cardDiv.appendChild(read);
        cardDiv.appendChild(deleteBk);

        };
    
}

function clearForm() {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
}

function deleteBook(event) {
    const index = event.target.id;

    myLibrary.splice(index, 1);
    populateBooks();
}

function toggleRead(event) {
    let status = event.target.innerHTML;

    if (status == "Read") {
        status = "Not Read";
    } else {
        status = "Read";
    }

    event.target.innerHTML = status;
}

