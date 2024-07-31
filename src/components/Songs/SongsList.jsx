import React, { useEffect, useState } from 'react';
import { fetchMusic } from '../../services/api';

const MusicList = () => {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    fetchMusic().then(data => setMusic(data));
  }, []);

  return (
    <div>
      <h1>Music List</h1>
      <ul>
        {music.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;