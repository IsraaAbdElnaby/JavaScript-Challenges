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

class TechnicalBook extends Book{
    constructor(title, author, isbn, numCopies, edition) {
        super(title, author, isbn, numCopies);
        this.edition = edition;
    }

    getEdition() {
        return `The current version of this book is ${this.edition}`;
    }
}

const GrokkinAlgorithms = new TechnicalBook (
    "Grokkin Algorithms",
     "Aditya Y. Bhargava",
      "9781617292231",
      10,
      1
);

console.log(GrokkinAlgorithms.getAvailability());
console.log(GrokkinAlgorithms.getEdition());