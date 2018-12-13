import React, {Component} from 'react';
import MovieContent from './components/MovieComponent/Movie';
import Header from './components/HeaderComponent/Header';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <Header home={'home'} about={'about'} movies={'movies'}/>
                </div>
                <div className="wrapper">
                    <MovieContent name="Ralph 2" released={2018}
                                  img="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/43000/43031/PosterDynamic/66364.jpg"/>
                    <MovieContent name="Venom" released={2018}
                                  img="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/53400/53391/PosterDynamic/46534.jpg"/>
                    <MovieContent name="Mortal Engines" released={2018}
                                  img="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1/amc-cdn/production/2/movies/52600/52559/PosterDynamic/43806.jpg"/>
                </div>
            </div>
        );
    }
}

export default App;
