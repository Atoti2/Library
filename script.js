const author = document.querySelector('.author')
const title = document.querySelector('.title')
const page = document.querySelector('.page')
const button = document.querySelector('.add')
const modal = document.querySelector('.modal')
const main = document.querySelector('main')
const myLibrary = []

function Book(title, author, page){
    this.title = title
    this.author = author
    this.page = page
}

function openModal(){
   modal.style.display = "block"
   main.style.filter = "blur(5px)"
}

function addBookToLibrary(){
    const b = new Book(title.value, author.value, page.value)
    myLibrary.push(b)
    author.value = ""
    title.value = ""
    page.value = ""
    modal.style.display = ('none')
    main.style.filter = "none"
    console.log(myLibrary);
}


