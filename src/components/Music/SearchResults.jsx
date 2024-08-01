import React from 'react';
//import MusicCard from './MusicCard';
import SongDetail from './SongDetail';

const SearchResults = ({ results }) => {
  if (results.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <div className="search-results">
        <h1>Lista de Canciones</h1>
        {results.map((item) => (
            <SongDetail key={item.id} item={item} />
      ))}
    </div>
  );
};

export default SearchResults;
/*
  return (
    <div className="search-results">
        <h1>Lista de Canciones</h1>
        {results.map((item) => (
            <MusicCard key={item.id} item={item} />
      ))}
    </div>
  );
*/