import React, { useState } from 'react';
import SongsList from '../components/Songs/SongsList';
import SongForm from '../components/Songs/SongForm';

const SongsPage = () => {
  const [isCreating, setIsCreating] = useState(false);

  const handleCreate = () => {
    setIsCreating(true);
  };

  const handleSave = () => {
    setIsCreating(false);
  };

  return (
    <div>
      <h1>Songs</h1>
      <button onClick={handleCreate}>Create Song</button>
      {isCreating ? (
        <SongForm onSave={handleSave} />
      ) : (
        <SongsList />
      )}
    </div>
  );
};

export default SongsPage;
