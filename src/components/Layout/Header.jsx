import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="navbar is-dark">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <img src="/path/to/logo.png" alt="Logo" />
      </Link>
    </div>
    <div className="navbar-end">
      <Link to="/profile" className="navbar-item">
        <figure className="image is-32x32">
          <img className="is-rounded" src="/path/to/profile-pic.jpg" alt="User profile" />
        </figure>
        <span>User Name</span>
      </Link>
      <Link to="/login" className="navbar-item button is-light">
        Log in
      </Link>
    </div>
  </header>
);

export default Header;


/*

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//import { AuthContext } from '../../contexts/AuthContext';
import { useAuth } from "../../contexts/AuthContext";

//const isAuthenticated = localStorage.getItem("authToken") !== null;

const Header = () => {
  const { logout } = useAuth("actions");
  const { isAuthenticated } = useAuth("state");
  //const {actions} = useContext(AuthContext);

  return (
    <header>
      <nav>

        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
        {isAuthenticated ? (<p>USUSARIO AUTENTICADO</p>) : 
                           (<p>USUSARIO NO AUTH.</p>)}
        </div>

        {isAuthenticated ? (
                            <>
                              <Link to="/profile"> Perfil </Link>
                              <button onClick={logout}>Salir</button>
                            </>
                           ) : ( <Link to="/login">Iniciar Sesion</Link>)
        }
      </nav>
    </header>
  );
};

export default Header;
*/
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



