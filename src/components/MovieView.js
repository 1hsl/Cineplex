import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Hero from './Hero';
import placeholder from '../media/placeholder500x750.jpg'

const MovieView = () => {
	const { id } = useParams();
	const [movieDetails, setMovieDetails] = useState({});
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=adc1e423c213d39f3e990f59c18c7a22&language=en-US&append_to_response=credits`)
			.then(response => response.json())
			.then(data => {
				setMovieDetails(data)
				setIsLoading(false)
				console.log(data)
			})
	}, [id]);

	function renderMovieDetails() {
		if(isLoading) {
			return <Hero text="⟳" />
		}
		if(movieDetails) {
			let posterUrl = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`

			const genre = movieDetails.genres.map((genre) => <li key={genre.id} className="col-2 bg-secondary mx-3 my-2 p-1 rounded text-center">{genre.name}</li>);
			const companie = movieDetails.production_companies.map((companie) => <li key={companie.id} className="companies col-2 bg-secondary mx-3 my-2 p-1 rounded text-center">{companie.name}</li>);

			return (
				<>
					<Hero text={movieDetails.title} />
					
					<div className="container">
						<div className="row">
							<div className="col-md-3">
							{posterUrl !== "https://image.tmdb.org/t/p/w500/null" ? (
								<img src={posterUrl} className="card-img rounded" alt={movieDetails.original_title} />
							) : (
								<img src={placeholder} className="card-img rounded" alt={movieDetails.original_title} />
							)}
							</div>
							<div className="col-md-9">
								<h1 className="col-8 display-1 fw-bold text-white">{movieDetails.original_title}</h1>
								<h2 className="fs-3  text-secondary fw-bold">{movieDetails.tagline}</h2>
								<h2 className="fs-3 text-secondary fw-semibold">Release date: {movieDetails.release_date}</h2>
								
								<h2 className="fs-3 text-secondary fw-semibold">Genres:</h2>
								<ul className="genres-list row text-white fw-semibold">{genre}</ul>
								<h2 className="fs-3 text-secondary fw-semibold">Production companies:</h2>
								<ul className="genres-list row text-white fw-semibold">{companie}</ul>
								<h3 className="fs-3 fw-bold p-2 bg-success text-white rounded text-center my-4">{movieDetails.status}</h3>

								<p className="text-white fs-4">{movieDetails.overview}</p>
							</div>
						</div>
					</div>
				</>
			)
		}
	}

	return renderMovieDetails()
};

export default MovieView;
