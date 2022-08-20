
import React from 'react'
import { BrowserRouter as Router,  Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div>
     
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav" style={{padding:"10px"}}>

                            <li class="nav-item"style={{padding:"10px"}}>
                                <Link to="/Login">Login</Link>
                                </li>
                                <li class="nav-item" style={{padding:"10px"}}>
                                <Link to="/Signup">SignUps</Link>
                                </li>
                                <li class="nav-item" style={{padding:"10px"}}>
                                <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li class="nav-item" style={{padding:"10px"}}>
                                <Link to="/products">Products</Link>
                                </li>
                            

                            </ul>
                        </div>
                    </div>
                </nav>

           


        </div>
    )
}
