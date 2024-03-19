import React from "react";
import Hero from "./Hero";
import error from '../media/error.png'

const PageNotFound = () => {
    return (
        <>
            <Hero text="Page not found" />
            <div className="errorImg"><img src={error} alt="404"></img></div>
        </>
    )
}

export default PageNotFound;