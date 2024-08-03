const API_URL = 'https://sandbox.academiadevelopers.com/';

export const loginUser = async (username, password) => {
  const response = await fetch(`${API_URL}/api-auth/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
};
/*
export const getProfile = async (token) => {
  const response = await fetch(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
};
*/
export const fetchMusic = async () => {
  const response = await fetch(`${API_URL}/music`);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
};

export const fetchSongs = async () => {
  const response = await fetch(`${API_URL}/songs`);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
};

export const fetchSongDetail = async (id) => {
  const response = await fetch(`${API_URL}/songs/${id}`);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
};

export const createSong = async (songData) => {
  const response = await fetch(`${API_URL}/songs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(songData)
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
};

export const updateSong = async (id, songData) => {
  const response = await fetch(`${API_URL}/songs/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(songData)
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
};


/*
const API_URL = 'https://sandbox.academiadevelopers.com/';

export const loginUser = async (username, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
};

export const getProfile = async (token) => {
  const response = await fetch(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
};

export const fetchMusic = async () => {
  const response = await fetch(`${API_URL}/music`);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
};
*/
