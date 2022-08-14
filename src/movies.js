// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return (movieDirectors = moviesArray.map((movie) => {
    return movie["director"];
  }));
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const onlyDrama = moviesArray.filter((movie) => {
    return movie["genre"].includes("Drama");
  });

  const spielbergFilms = onlyDrama.filter((a) => {
    return a["director"] === "Steven Spielberg";
  });

  return spielbergFilms.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }

  const filmsWithScores = moviesArray.filter((movie) => {
    return movie["score"] !== "" && movie["score"] !== undefined;
  });

  const filmScores = filmsWithScores.map((movie) => {
    return movie["score"];
  });

  const totalScore = filmScores.reduce((sumOfAllScores, movieScore) => {
    return (sumOfAllScores += movieScore);
  }, 0);

  return Number((totalScore / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const onlyDrama = moviesArray.filter((movie) => {
    return movie["genre"].includes("Drama");
  });

  const dramaScores = onlyDrama.map((movie) => {
    return movie["score"];
  });

  const totalScore = dramaScores.reduce((sumOfAllScores, movieScore) => {
    return (sumOfAllScores += movieScore);
  }, 0);

  if (!onlyDrama.length) {
    return 0;
  }

  return Number((totalScore / dramaScores.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const movieYears = moviesArray.filter((movie) => {
    return movie["year"];
  });

  return movieYears.sort((a, b) => (a.year > b.year ? 1 : -1));
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const movieTitles = moviesArray.map((movie) => {
    return movie["title"];
  });

  const sortedMovieTitles = movieTitles.sort();

  if (sortedMovieTitles.length > 20) {
    return sortedMovieTitles.slice(0, 20);
  }

  return sortedMovieTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
