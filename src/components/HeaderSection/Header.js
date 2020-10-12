import React from 'react';

const Header = ({imageData}) => {
    return (
        <header className="navbar navbar-sticky navbar-expand-lg navbar-dark">
            <div className="container position-relative">
                <a className="navbar-brand" href="/">
                    <img className="navbar-brand-regular" src={imageData} alt="brand-logo" />
                    <img className="navbar-brand-sticky" src="/img/logo.png" alt="sticky brand-logo" />
                </a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="navbar-inner">
                    {/*  Mobile Menu Toggler */}
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <nav>
                        <ul className="navbar-nav" id="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link scroll" href="#home">Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scroll" href="#features">Fonctions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scroll" href="#tlmam">TLMAM ?</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scroll" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;