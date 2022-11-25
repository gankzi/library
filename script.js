let addBook = document.querySelector('#add-book');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    console.log(this.title + " by " + this.author + ", " + this.pages + ", " + this.read);
}

function addBookToLibrary() {
    
}


function openForm() {
    document.querySelector("#new-book").style.display = "block";
}

function closeForm() {
    document.querySelector("#new-book").style.display = "none";
}

