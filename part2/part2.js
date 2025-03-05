const myMovie = {
  title: "The Longest Yard",
  year: "1964",
};
console.log(myMovie);

//  add rating: 5 and Summary: World War II movie about the Normandy landings

myMovie.rating = "5";
console.log(myMovie);
myMovie.summary = "World War II movie about the Normandy landings";
console.log(myMovie);

// Change the rating to 4 and change the year to 1962

myMovie.year = 1962;
console.log(myMovie);
myMovie.rating = 4;
console.log(myMovie);

// Remove the Summary property
delete myMovie.summary;
console.log(myMovie);
