import React from 'react'

import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid d-flex ">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink >
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/notas">Notas</NavLink >
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/calculadora">Calculadora</NavLink >
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/todolist">Todo</NavLink >
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/calendario">Calendario</NavLink >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;