import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import MovieView from "./components/MovieView";
import PageNotFound from "./components/PageNotFound";

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=adc1e423c213d39f3e990f59c18c7a22`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results)
        })
    } 
  }, [searchText])

  return (
    <div className="App">
      <div className="container">
        <Navbar 
        searchText={searchText}
        setSearchText={setSearchText}
        inputText={inputText}
        setInputText={setInputText} 
        />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route 
          path="/search" element={<Search keyword={searchText} searchResults={searchResults} />} />
        <Route path="/movies/:id" element={<MovieView />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>      
      </div>
    </div>
  );
}

export default App;
