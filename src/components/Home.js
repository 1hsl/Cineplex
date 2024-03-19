import React from "react";
import Hero from "./Hero";

const Home = () => {
    return (
        <>
            <Hero text='Good to see you again' />

            <h1 className="welcome display-1 p-5 fw-bold rounded my-5">Millions of movies and series <span style={{textDecoration: 'underline'}}>just for you</span> ♡</h1>
        </>
    );
}

export default Home;