import React, { useState } from 'react';

const AddSongForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [songFile, setSongFile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && songFile) {
      // Llama a la función onAdd con los datos de la nueva canción
      onAdd({ title, song_file: songFile });
      // Limpia los campos del formulario después de agregar
      setTitle('');
      setSongFile('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Título de la Canción</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="field">
        <label className="label">URL del Archivo de Canción</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={songFile}
            onChange={(e) => setSongFile(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button type="submit" className="button is-primary">Agregar Canción</button>
        </div>
      </div>
    </form>
  );
};

export default AddSongForm;
