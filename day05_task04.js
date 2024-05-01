//https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
//Class - Movie
class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
  // Creating an instance of Movie class
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  // Testing getPG method
  const movies = [
    new Movie("Movie 1", "Studio 1", "PG"),
    new Movie("Movie 2", "Studio 2", "PG-13"),
    new Movie("Movie 3", "Studio 3", "R"),
    new Movie("Movie 4", "Studio 4", "PG"),
    new Movie("Movie 5", "Studio 5", "PG-13")
  ];
  
  console.log(Movie.getPG(movies));
  