const author = document.querySelector('.author')
const title = document.querySelector('.title')
const page = document.querySelector('.page')
const read = document.getElementById('read')

const button = document.querySelector('.add')
const modal = document.querySelector('.modal')
const main = document.querySelector('main')
const books = document.querySelector('.books')

const myLibrary = []

function Book(title, author, page, read){
    this.title = title
    this.author = author
    this.page = page
    this.read = read
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

function changeRead(readState){
    let state = readState.parentElement.childNodes[7].childNodes[1].data
    myLibrary.forEach((book) => {
        if(state == "Not yet"){
            book.read = "Already read"
            render()
        }else{
            book.read = "Not yet"
            render()
        }
      
    })
}

function addBookToLibrary(){
    if(title.value && author.value && page.value){
        const b = new Book(title.value, author.value, page.value, getReadState(read.checked))
        myLibrary.push(b)
        author.value = ""
        title.value = ""
        page.value = ""
        modal.style.display = ('none')
        main.style.filter = "none"
        render()
    }else{
        alert('Fill out the inputs!')
    }
}

function removeBooks(bookTitle){
    let title = bookTitle.parentElement.firstElementChild.innerHTML
    myLibrary.forEach((book, index) => {
        book.title ===  title ? myLibrary.splice(index, 1) : myLibrary
    })
    render()
}

function render(){
    books.innerHTML = ""
    myLibrary.forEach((book) => {
        books.innerHTML += `    
        <div>
        <h2 id="title">${book.title}</h2> 
        <p><span>Author: </span>${book.author}</p>
        <p><span>Pages: </span>${book.page}</p>
        <p><span>Read: </span>${book.read}</p>
        <button onclick="removeBooks(this)">Delete</button>
        <button onclick="changeRead(this)">Read</button>
    </div>`
    })
}

