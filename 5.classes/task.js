class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
            this.name = name;
            this.releaseDate = releaseDate;
            this.pagesCount = pagesCount;
            this.state = 100;
            this.type = null;
        }

    fix(){
        return this.state = this._state * 1.5;
    }

    set fixState(Newstate){
        if (Newstate < 0) {
            this._state = 0;
        } if (Newstate > 100) {
            this._state = 100;
        } else {
            this._state = Newstate
        }
    }

    get State(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
            this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "book";
        this.author = this.author;
    }
}
    
class NovelBook extends Book{
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author)
        this.type = "novel";
    }
}

class DetectiveBook extends Book{
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author)
        this.type = "detective";
    }
}

class FantasticBook extends Book{
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author)
        this.type = "fantastic";
    }
}

class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName){
        const booIndex = this.books.findIndex(book => book.name === bookName);
        if (bookIndex  !== -1){
            return this.books.splice(bookIndex, 1)[0];
        }
        return null;
    }
}