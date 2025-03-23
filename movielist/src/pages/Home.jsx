import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home () {

    const [searchQuery, setSearchQuery] = useState("");
    
    const movies = [
        {id:1,title:"GTA VI", release_date : "2025"},
        {id:2,title:"GTA V", release_date : "2013"},
        {id:3,title:"GTA IV", release_date : "2008"},
        {id:4,title:"GTA SA", release_date : "2004"}
    ];

    const handleSearch = () => {
        alert(searchQuery)
    }
    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-from">
            <input onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} type="text" placeholder="Search for Movies ..." className="search-input" />
            <button type="submit" className="search-btn">Search </button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) => 
            movie.title.toLowerCase().startsWith(searchQuery) && 
            <MovieCard movie={movie} key={movie.id}/>)}
        </div>
    </div>
    )
}

export default Home 