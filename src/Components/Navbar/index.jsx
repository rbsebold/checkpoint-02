import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { AuthContext } from "../../Providers/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";

const Navbar = () => {

  const navigate = useNavigate();

  const { theme, handleTheme } = useContext(ThemeContext);

  const { isLogged, removeUserData } = useContext(AuthContext);

  const logout = () => {
    removeUserData();
    navigate("/login");
  };


  return (
    <header className="sticky-top">
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar navbar-dark bg-dark ou navbar-light bg-light*/}
      <nav
        className={ theme === "light" ? `navbar navbar-expand-sm navbar-light bg-light` : `navbar navbar-expand-sm navbar-dark bg-dark`}
        aria-label="Third navbar example"
        data-testid="nav"
      >
        <div className="container">
          {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
          <a className={`navbar-brand ${styles.navbarBrand}`} href="/home">
            DH Odonto
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
                <a className="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                
                {/* Se o usuário estiver logado, deverá aparecer um botão de logout
                que vai apagar o token do localstorage.
                Se o usuário estiver deslogado, um link fará um redirecionamento, com react-router,
                ao formulário de login
                O botão de logout deverá ser testado darkmode
                se sim, btn-dark, se não, btn-light */}

                
                  {!isLogged ? (<a className="nav-link" href="/login">Login</a>) 
                  : (

                  <button
                    className={
                      theme === "light" ? "btn btn-light" : "btn btn-danger"
                    }
                    onClick={logout}
                  >
                    Logout
                  </button>
                )}


            
              </li>
              <li className={`nav-item`}>
                {/* Ao ser clicado, esse botão mudará a aplicação para dark mode ou light mode.
                 Lembre-se de usar um estado no contexto para fazer essa alteração.
                 Na linha seguinte deverá ser feito um teste se a aplicação
                 está em dark mode e deverá utilizar o icone ☀ ou 🌙 e btn-dark ou btn-light*/}
                <button
                  className={theme === "light" ? `btn btn-light${styles.btnStyle}` : `btn btn-dark ${styles.btnStyle}`}
                  onClick={handleTheme}
                  data-testid="btn-theme"
                >
                  {theme === "light" ? '☀' : '🌙'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
