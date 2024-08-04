import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//import { AuthContext } from '../../contexts/AuthContext';
import { useAuth } from "../../contexts/AuthContext";

const isAuthenticated = localStorage.getItem("authToken") !== null;

const Header = () => {
  const { logout } = useAuth("actions");
  //const {actions} = useContext(AuthContext);

  return (
    <header>
      <nav>

        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
        {isAuthenticated ? (<p>El usuario está autenticado.</p>) : 
                           (<p>El usuario no está autenticado.</p>)}
        </div>

        {isAuthenticated ? (
          <>
            <Link to="/profile"> Perfil </Link>
            <Link to="/logout"> Salir </Link>
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

/*
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const isAuthenticated = localStorage.getItem("authToken") !== null;

const Header = () => {
    const { authState } = useContext(AuthContext);

    return (
        <div>
            {isAuthenticated ? (
                <p>El usuario está autenticado.</p>
            ) : (
                <p>El usuario no está autenticado.</p>
            )}
        </div>
    );
};

export default Header;
*/



