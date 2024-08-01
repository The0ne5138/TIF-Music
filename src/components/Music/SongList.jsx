import useFetch from "../../hooks/useFetch";
import SongCard from "./SongCard";
import AddSongForm from "./AddSongForm"; 
import SongForm from './SongForm';
import { useEffect, useState } from "react";

function SongList() {
    const [{ data, isError, isLoading }, doFetch] = useFetch(
        "https://sandbox.academiadevelopers.com/harmonyhub/songs/",
        {}
    );
    const [songs, setSongs] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);

    const [isCreating, setIsCreating] = useState(false);


    useEffect(() => {
        doFetch();
    }, []);

    useEffect(() => {
        if (data) {
            setSongs(data.results);
            setNextPage(data.next);
            setPreviousPage(data.previous);
        }
    }, [data]);

    const handleDelete = async (id) => {
        await fetch(`https://sandbox.academiadevelopers.com/harmonyhub/songs/${id}/`, {
            method: 'DELETE',
        });
        setSongs(songs.filter(song => song.id !== id));
    };

    const handleEdit = (song) => {
        console.log('Editar canción', song);
        {isCreating ? (<SongForm onSave={handleSave} />) : (<SongList />)}
    };

    const handleAdd = async (newSong) => {
        const response = await fetch("https://sandbox.academiadevelopers.com/harmonyhub/songs/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newSong),
        });
        const addedSong = await response.json();
        setSongs([...songs, addedSong]);
    };

    const fetchPage = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setSongs(data.results);
        setNextPage(data.next);
        setPreviousPage(data.previous);
    };

    if (isLoading) return <p>Cargando...</p>;
    if (isError) return <p>Error al cargar las canciones.</p>;
    if (!data) return <p>No hay canciones disponibles</p>;

    return (
        <div>
            <div className="my-5">
                <h2 className="title">Lista de Canciones</h2>
                {/*  <AddSongForm onAdd={handleAdd} /> Aqui Se muestra el formulario  */}
                <ul>
                    {songs.map((song) => (
                        <div key={song.id} className="column is-two-third">
                            <SongCard song={song} onDelete={handleDelete} onEdit={handleEdit} />
                        </div>
                    ))}
                </ul>
                <div>
                    {previousPage && <button onClick={() => fetchPage(previousPage)}>Anterior</button>}
                    {nextPage && <button onClick={() => fetchPage(nextPage)}>Siguiente</button>}
                </div>
            </div>
        </div>
    );
}

export default SongList;

/*
import React, { useEffect, useState } from 'react';
import { fetchSongs } from '../../services/api';
import SongDetail from './SongDetail';

const SongList = () => {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    fetchSongs().then(data => setMusic(data));
  }, []);

  return (
    <div>
      <h1>Lista de Canciones</h1>
      <ul>
        {music.results.map((song) => (
            <div key={song.id} className="column is-two-third">
                <SongDetail song={song} onDelete={handleDelete} onEdit={handleEdit}/>
            </div>
        ))}

      </ul>
    </div>
  );
};

{music.results.map((song) => (
  <li key={song.id}>{song.title}</li>
))}

export default SongList;
  */
