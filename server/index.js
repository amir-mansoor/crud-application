const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hello@world89",
  database: "crud_app"
});

app.get("/api/get", (req, res) => {
	const sqlGet = "SELECT * FROM movie_reviews";
	con.query(sqlGet, (err, result) => {
		res.send(result)
	})
})

app.post("/api/insert", (req, res) => {
	const movieName = req.body.MovieName;
	const movieReview = req.body.MovieReview;
	const sqlInsert = "INSERT INTO movie_reviews (movie_Name, movie_review) VALUES (?, ?);";
	con.query(sqlInsert,[movieName, movieReview], (err, result) => {
		console.log(result)
	})	
})


PORT = 5000;
app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`)
})