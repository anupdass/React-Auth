import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary text-white">
                <div class="container-fluid">
                    <a class="navbar-brand text-white" href="#">Urban Raider</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/home" class="nav-link active text-white" aria-current="page" href="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <Link to='/login'><a class="nav-link text-white" href="#">Login</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;