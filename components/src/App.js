import React, { Component} from 'react';
import MovieContent from './components/MovieComponent/movie';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="wrapper">
          <MovieContent name="Instant Family" released={2018} img="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/55700/55745/PosterDynamic/66732.jpg"/>
          <MovieContent name="Ralph 2" released={2018} img="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/43000/43031/PosterDynamic/66364.jpg"/>
          <MovieContent name="Venom" released={2018} img="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/53400/53391/PosterDynamic/46534.jpg"/>
          <MovieContent name="The Front Runner" released={2018} img="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/57500/57501/PosterDynamic/66795.jpg"/>
          <MovieContent name="Mortal Engines" released={2018} img="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/52600/52559/PosterDynamic/43806.jpg"/>
          <MovieContent name="Dr. Seuss' The Grinch" released={2018} img="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/44500/44521/PosterDynamic/66594.jpg"/>
        </div>

    );
  }
}

export default App;
