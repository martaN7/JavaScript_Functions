const library = [
    {
        title: 'The Fellowship of the Ring',
        author: 'J.R.R. Tolkien',
        pages: 432,
        published: 1954,
        ISBN:  9780007203543,
        qty: 13,
        genre: 'fantasy',
        borrowed: 5
    },
    {
        title: 'A Game Of Thrones',
        author: 'George R.R. Martin',
        pages: 835,
        published: 1996,
        ISBN:  9780553588484,
        qty: 23,
        genre: 'fantasy',
        borrowed: 6
    },
    {
        title: '1984',
        author: 'George Orwell',
        pages: 368,
        published: 1949,
        ISBN:  9780452284234,
        qty: 23,
        genre: 'classic',
        borrowed: 7
    },
    {
        title: 'The Midwife of Auschwitz',
        author: 'Anna Stuart',
        pages: 348,
        published: 2022,
        ISBN:  9781803142678,
        qty: 17,
        genre: 'history',
        borrowed: 9
    },
]

//329
function countAvailableBooks(){
    const books = library.map((book) => book.qty - book.borrowed).reduce((p,n) => p+n);
    console.log(`We currently have ${books} available books in our library`);
    return books;
}
countAvailableBooks();

//330
function addBook(title, author, pages, published, ISBN, genre, qty = 1){
    if(library.some(book => book.ISBN === ISBN)){
        return console.log('Book already in collection');
    }else{
        library.push({
            title,
            author,
            pages,
            published,
            ISBN,
            genre,
            qty
        });
        console.log(`Book added`);
        console.log(library);
        return library;
    }
}
addBook('elo', 'author', 256, 1259, 9780553588483, 'fantasy', 3);

//331
function isAvailable(title){

    const [book] = library.filter(book => book.title === title);
    if (!book){
        return console.log(`We don't have ${title} in our collection`);
    }
    return book.borrowed < book.qty ? console.log(`${title} is available`) : console.log(`${title} is not available`);

}
isAvailable('A Game Of Thrones');

//332
function getBooksAfterXX(){
    const books = library.filter(book => book.published >= 2000);
    if(!books.length) return  console.log(`We don't have books published after year 2000`);
    console.log(`Books published after year 2000:`);
    books.forEach(book => console.log(book.title));
    return books;
}

getBooksAfterXX();

//333
function getBooksBeforeXX(){
    const books = library.filter(book => book.published < 2000);
    if(!books.length) return  console.log(`We don't have books published before year 2000`);
    console.log(`Books published before year 2000:`);
    books.forEach(book => console.log(book.title));
    return books;
}

getBooksBeforeXX();

//334
function getBooksByGenre(genre){
    const books = library.filter(book => book.genre === genre);
    if(!books.length) return  console.log(`We don't have books in ${genre} genre`);
    console.log(books);
    return books;
}
getBooksByGenre('fantasy');

//335
function getBooksByAuthor(author){
    const books = library.filter(book => book.author === author);
    if(!books.length) return  console.log(`We don't have books of this author`);
    console.log(books);
    return books;
}
getBooksByAuthor('George R.R. Martin');

//336
function countBooks(){
    const books = library.map(({qty}) => qty).reduce((p,n) => p + n);
    console.log(`We currently have ${books} books in our library`);
    return books;
}
countBooks();

//337
function countPages(){
    const pages = library.map(({pages, qty}) => pages*qty).reduce((p,n) => p+n);
    console.log(pages);
    return pages;
}
countPages();

//338
function borrowBook(ISBN){
    const [found] = library.filter(book => book.ISBN === ISBN);
    if(!found) return  console.log(`We don't have this book`);
    if(found.qty === found.borrowed) return console.log(`Book unavailable`);
    library.map(book => {
        if(book.ISBN === ISBN){
            return {
                ...book,
                borrowed: book.borrowed + 1
            }
        }
        return book;
    });

    console.log(library);
    return library;
}
borrowBook(9780553588484);

//339
function returnBook(ISBN){
    const [found] = library.filter(book => book.ISBN === ISBN);
    if(!found) return  console.log(`We don't have this book`);
    const updatedCollection = library.map(book => {
        if(book.ISBN === ISBN){
            return {
                ...book,
                borrowed: book.borrowed - 1
            }
        }
        return book;
    });

    console.log(updatedCollection);
    return updatedCollection;
}
returnBook(9780553588484);

//340
function removeBook(ISBN){
    const newCollection = library.filter(book => book.ISBN !== ISBN);
    console.log(newCollection);
    return newCollection;
}

removeBook(9780060765484);