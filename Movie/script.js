class Movie {

    constructor(title, director, genre, releaseYear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    getOverView() {
        return `${this.title}, a ${this.genre} film directed by ${this.director}
        was released in ${this.releaseYear}. It recieved a rating of ${this.rating}.`; 
    }

}

const HarryPotter = new Movie("Harry Potter", "Chris Columbus", "fantasy", "2001", "7.6");
console.log(HarryPotter.getOverView());