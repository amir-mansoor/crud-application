import './App.css';
import React, {useState, useEffect} from "react";
import Axios from "axios";

function App() {
  const [movieName, setMovieName] = useState('');
  const [review, setReview] = useState('');
  const [movieReviewList, setmovieReviewList] = useState([]);


  useEffect(() => {
    Axios.get("http://localhost:5000/api/get")
    .then((response) => {
      // console.log(response.data)
      setmovieReviewList(response.data)
    })
  }, [])

  const submitReview = ()  => {
      Axios.post("http://localhost:5000/api/insert", {
        MovieName: movieName,
        MovieReview: review,
      });

      setmovieReviewList([...movieReviewList, {MovieName: movieName,MovieReview: review},]);     
  }
  return (
    <div className="App">
      <h1>CRUD Example</h1>

      <div className="form">
        <label>Movie Name:</label>
        <input type="text" onChange={(e) => {setMovieName(e.target.value)}} placeholder="Movie Name" name="movie_Name" />
        <label>Review:</label>
        <input onChange={(e) => {setReview(e.target.value)}} placeholder="Review" type="text" name="review" />
      
        <button onClick={submitReview}>Submit</button>
        {movieReviewList.map((val) => {
          return ( 
            <div className="card"> 
              <h1>{val.movie_name}</h1> 
              <p>{val.movie_review}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
