import React from 'react';
import './movie.css';


const MovieContent = (props) => {
	return (
					<div className="movieName">
						<h4>Movie name: {props.name}</h4>
						<p>Released: {props.released}</p>
						<img src={props.img} alt=""/>
					</div>

		)
};

export default MovieContent;