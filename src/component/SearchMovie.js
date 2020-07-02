import React,{useState} from 'react'

export default function SearchMovie(){
	 const [query, setQuery] = useState('');
	 const [movies, setMovies] = useState([]);
    
    const searchMovies = async (e) => {
        e.preventDefault();
                
        const url = `https://api.themoviedb.org/3/search/movie?api_key=75915774035132afbe6d408a5093b9fc&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
			const data  = await res.json();
			setMovies(data.results);
			console.log(movies)
        }catch(err){
            console.error(err);
        }
    }
    
	return(
		<div>
			<form className="form" onSubmit={searchMovies}>
				<label className="label" htmlFor="query">Movie Name</label>
					<input 
					className="input" 
					type="text" 
					name="query" 
					placeholder="Movie name"
					value={query}
					onChange={(e)=>setQuery(e.target.value)} />
					<button className="button" type="submit">Submit</button>
				
			</form>
			<div className="card-list">
				{movies.filter(movie=>movie.poster_path).map(movie=>(
					<div className="card">
						<img className="card--image"
						  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}/>


					</div>
				))}
			</div>
		</div>
	)

}