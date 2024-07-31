import React, { useState } from 'react';
import { createSong, updateSong } from '../../services/api';

const SongForm = ({ song = {}, onSave }) => {
  const [title, setTitle] = useState(song.title || '');
  const [artist, setArtist] = useState(song.artist || '');
  const [album, setAlbum] = useState(song.album || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const songData = { title, artist, album };
    if (song.id) {
      await updateSong(song.id, songData);
    } else {
      await createSong(songData);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Artist</label>
        <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
      </div>
      <div>
        <label>Album</label>
        <input type="text" value={album} onChange={(e) => setAlbum(e.target.value)} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default SongForm;
