const myWatchedSeries = ["super store", "brooklin 99", "friens"];

const myWatchedSeriesLength = myWatchedSeries.length;

const myWatchedSeriesSentence = myWatchedSeries.join(", ");

console.log(`I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`);

myWatchedSeries[2] = "vikings";

myWatchedSeries.push("breaking bad");

myWatchedSeries.unshift("game of thrones");

myWatchedSeries.splice(1, 1);

const thirdLetter = myWatchedSeries[1][2];

console.log(`The third letter of the series "brooklin 99" is "${thirdLetter}"`);

console.log(myWatchedSeries);
