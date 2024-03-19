import React from "react";
import { Link } from 'react-router-dom';

import Hero from "./Hero";

import placeholder from '../media/placeholder500x750.jpg'

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    const detailUrl = `/movies/${movie.id}`
    

    return (
        <div className="col-lg-3 col-md-3 col-2 my-4">
            <Link to={detailUrl}>
                <div className="card" style={{width: '18rem', height: '30rem', overflow: 'auto'}}>
                    <div className="card-body">
                        {posterUrl !== "https://image.tmdb.org/t/p/w500/null" ? (
                            <img src={posterUrl} className="card-img" alt={movie.original_title} />
                            ) : (
                                <img src={placeholder} className="card-img" alt={movie.original_title} />
                        )}
                        <div className="my-1">
                            <h5 className="card-title">{movie.original_title}</h5>
                            <h6 className="card-date mb-2 text-secondary">{movie.release_date}</h6>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

const Search = ({ keyword, searchResults }) => {
    const resultHtml =
        searchResults && searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />;
        });


    return (
        <>
        { keyword 
        ? <Hero text="Searching" subtext={keyword} /> 
        : <Hero text='Waiting for your query' />}

        {resultHtml && keyword ? (
				<div className="container">
					<div className="row">{resultHtml}</div>
				</div>
			) : (
				<></>
			)}
        
        {resultHtml.length === 0 && keyword ? 
            (<h1 className="text-center display-3 my-5" style={{color: '#dcf3ff'}}>There is no movie like that in my database. Sorry ☹</h1>            
            ) : (
            <></>
            )
        }
        </>
    );
};

export default Search;
