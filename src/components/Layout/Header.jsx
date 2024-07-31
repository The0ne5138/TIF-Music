import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Header = () => {
  const { authState, logout } = useContext(AuthContext);

  return (
    <header>
      <nav>

        <div>
          <Link to="/">Home</Link>
        </div>

        {authState.isAuthenticated ? (
          <>
            <Link to="/profile">Perfil</Link>
            <button onClick={logout}>Salir</button>
          </>
        ) : (
          <Link to="/login">Iniciar Sesion</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
