import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return <div>
        <nav className="navbar">
            <div className="navbar-brand">
                <button className="navbar-burger">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div className="navbar-menu">
                <Link to="/" className="navbar-item">Home</Link>
                <Link to="/about" className="navbar-item">About</Link>
                <Link to="/form" className="navbar-item">Form</Link>
                <Link to="/user" className="navbar-item">User</Link>
            </div>
        </nav>
    </div>
} 