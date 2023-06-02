import mongoose from "mongoose";
import { MovieDetails } from "./schema/movieSchema.js";

mongoose.connect("mongodb://127.0.0.1:27017/myMovieListe");

// MovieDetails.find()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// 1. ####################################################

// MovieDetails.find({ director: "Steven Spielberg" }, { title: 1 })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// 2. ####################################################

// MovieDetails.find({ "tomato.userReviews": { $gt: 40000 } })
//   .sort({ "tomato.userReviews": 1 })
//   .limit(20)
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

//3. ####################################################

// MovieDetails.find({ year: { $gt: 2000, $lt: 2005 } }, { title: 1, year: 1 })
//   .sort({ year: -1 })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

//4. ####################################################

// MovieDetails.find(
//   { "tomato.userRating": { $gte: 4 }, year: { $gte: 2010 } },
//   { title: 1, director: 1 }
// )
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

//5. ####################################################

// MovieDetails.find({
//   "tomato.userReviews": { $lte: 1000 },
//   year: { $lte: 2005 },
// })
//   .sort({ "tomato.userReviews": -1 })
//   .limit(10)
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

//6. ####################################################

// MovieDetails.find({ tomato: { $exists: false } })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

//7. ####################################################

// MovieDetails.find(
//   { "imdb.votes": { $gte: 100, $lt: 1000 } },
//   { title: 1, "imdb.rating": 1 }
// )
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

//8. ####################################################

// MovieDetails.find()
//   .sort({ "imdb.rating": -1 })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

//9. ####################################################

// MovieDetails.find()
//   .sort({ "imdb.rating": -1 })
//   .limit(10)
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

//10. ####################################################

MovieDetails.find(
  { genres: { $all: ["Crime", "Drama"] } },
  { title: 1, genres: 1 }
)
  .sort({ "imdb.rating": 1 })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
