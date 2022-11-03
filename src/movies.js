// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let result = moviesArray.map((movie) => movie.director);

  return result;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let numBest = moviesArray.filter(
    (movie) =>
      movie.director == "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return numBest.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let sumScores = moviesArray
    .map((movie) => movie.score)
    .reduce((previousValue, currentValue) => previousValue + currentValue);
  let avg = sumScores / moviesArray.length;
  return Number(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let genres = moviesArray.filter((movie) => movie.genre.includes("Drama"));

    if(genres.length === 0){
        return 0;
    }

    let scores = genres.map(elem => elem.score).reduce((previousValue, currentValue) => previousValue + currentValue);  
    let avg =  scores/genres.length;
    return Number(avg.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let years = [...moviesArray].sort((a, b) => a.year - b.year);
    return years;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
