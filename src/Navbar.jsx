import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <nav  className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <NavLink to={"/"}>
                    <img style={{maxHeight:"50px",marginRight:"5px"}} src="/nyt-bestseller-badge.png" alt=""/>
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className=" navbar-toggler-icon"></span>
                </button>
                <div className="collapse  navbar-collapse" id="navbarNavAltMarkup">
                    <div className="  navbar-nav">
                        <NavLink
                            className={({isActive}) =>
                                isActive ? 'nav-link active ' : 'nav-link'
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({isActive}) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                            to="/best"
                        >
                            Best Sellers
                        </NavLink>
                        <NavLink
                            className={({isActive}) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                            to="/advanced_search"
                        >
                            Advanced Search
                        </NavLink>
                        <NavLink
                            className={({isActive}) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                            to="/favourites"
                        >
                            Favourites
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
