import React from 'react';

const Navbar = () => {
    return ( 
        <div className="navbar navbar-expand-lg bg-transparent navbar-sticky navbar-airy navbar-dark bg-hover-white bg-fixed-white navbar-hover-light navbar-fixed-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="home">P'sG's</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="true" aria-label="Toggle navigation">
                    <i class="fa fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="Mugs">Mugs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Customatic">Customatic</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="not_mugs">Not Mugs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about_us">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;