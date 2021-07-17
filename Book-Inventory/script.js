class Book {

    constructor(title, author, isbn, numCopies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.numCopies = numCopies;

    }

    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getISBN() {
        return this.isbn;
    }
    getNumCopies() {
        // console.log(this.numCopies);
        return this.numCopies;
    }

    getAvailability() {
        if (this.numCopies <= 0) {
            return "out of stock";
        } else if (this.numCopies < 10) {
            return "Low Stock!";
        }
        return "In Stock";
    }

    sell(numSold = 1) {
        this.numCopies -= numSold;
    }

    restoke(copies = 5) {
        this.numCopies += copies;
    }

}

const cleanCode = new Book("Clean Code", "Uncle Pop", "1223", 10);
console.log(cleanCode.getNumCopies());

cleanCode.sell(4);
console.log(cleanCode.title, cleanCode.getNumCopies());
console.log(cleanCode.getAvailability());

cleanCode.sell(6);
console.log(cleanCode.title, cleanCode.getNumCopies());
console.log(cleanCode.getAvailability());

cleanCode.restoke(20);
console.log(cleanCode.title, cleanCode.getNumCopies());
console.log(cleanCode.getAvailability());