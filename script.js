const author = document.querySelector('.author')
const title = document.querySelector('.title')
const page = document.querySelector('.page')
const read = document.getElementById('read')

const button = document.querySelector('.add')
const modal = document.querySelector('.modal')
const main = document.querySelector('main')
const books = document.querySelector('.books')
let idCount = 1

class Book {
    constructor(title, author, page, read, id) {
      this.title = title;
      this.author = author;
      this.page = page;
      this.read = read;
      this.id = id
    }
}

let myLibrary = [{
    title: 'Harry potter',
    author: 'Ferike',
    page: 32,
    read: 'Not yet',
    id: 1,
}]



function setLocalStorage(){
    localStorage.setItem("library", JSON.stringify(myLibrary))
}

function getLocalStorage(){
    myLibrary = JSON.parse(localStorage.getItem("library"))
}

function openModal(){
   modal.style.display = "block"
   main.style.filter = "blur(5px)"
}

function getReadState(){
    if(read.checked){
        return 'Already read'
    }else{
        return 'Not yet'
    }
}

function changeRead(bookTitle){
    let title = bookTitle.parentElement.firstElementChild.innerHTML
    let i = findBook(title)
    if(myLibrary[i].read === "Already read"){
        myLibrary[i].read = "Not yet"
    
    }else{
        myLibrary[i].read = "Already read"
      
    }
    setLocalStorage()
    render()
}

function addBookToLibrary(){
    if(title.value && author.value && page.value){
        const b = new Book(title.value, author.value, page.value, getReadState(read.checked), idCount++)
        myLibrary.push(b)
        author.value = ""
        title.value = ""
        page.value = ""
        modal.style.display = ('none')
        main.style.filter = "none"
        console.log(myLibrary);
        setLocalStorage()
        render()
    }else{
        alert('Fill out the inputs!')
    }
}

function removeBooks(bookTitle){
    let title = bookTitle.parentElement.firstElementChild.innerHTML
    myLibrary.splice(findBook(title), 1)
    setLocalStorage()
    render()
}


function findBook(title){
    for(let book of myLibrary){
        if(book.title === title){
            return myLibrary.indexOf(book)
        }
    }
}

function render(){
    getLocalStorage()
    books.innerHTML = ""
    myLibrary.forEach((book) => {
        books.innerHTML += `    
    <div>
        <h2 id="title">${book.title}</h2> 
        <p><span>Author: </span>${book.author}</p>
        <p><span>Pages: </span>${book.page}</p>
        <p><span>Read: </span>${book.read}</p>
        <button class="del" onclick="removeBooks(this)">Delete</button>
        <button class="read" onclick="changeRead(this)">Read</button>
    </div>`
    })
}

