import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const ProfilePage = () => {
  const { authState } = useContext(AuthContext);
  const { user } = authState;

  if (!user) return <div>Loading...</div>;

  //<p>Email: {user.email}</p>  Esto despues del Nombre
  return (
    <div>
      <h1>Perfil</h1>
      <p>Nombre: {username}</p>
      
    </div>
  );
};

export default ProfilePage;
