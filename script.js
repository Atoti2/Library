const author = document.querySelector('.author')
const title = document.querySelector('.title')
const page = document.querySelector('.page')
const button = document.querySelector('.add')
const modal = document.querySelector('.modal')
const myLibrary = []

function Book(title, author, page){
    this.title = title
    this.author = author
    this.page = page
}

function openModal(){
    if(modal.classList.contains('invisible')){
        modal.classList.remove('invisible')
    }
}

function addBookToLibrary(){
    const b = new Book(title.value, author.value, page.value)
    myLibrary.push(b)
    author.value = ""
    title.value = ""
    page.value = ""
    modal.classList.add('invisible')
    console.log(myLibrary);
}


