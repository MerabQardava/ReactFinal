import React, {useContext, useState} from 'react';
import {AppContext} from "./AppProvider";
import {Link} from "react-router-dom";

function Home(props) {



    return (

        <div className="jumbotron">
            <div className="jumbotron-overlay"></div>
            <img src="https://basecamplive.com/wp-content/uploads/2023/02/books.jpeg" alt="Background Image"/>
                <div className="container jumbotron-content">
                    <h1 className="display-4">Welcome to BookHub</h1>
                    <p className="lead">Find information about your favorite books on BookHub</p>
                    <hr className="my-4"/>
                        <p>Explore our curated selection of Books, Comics, Manga, and more.</p>
                        <p className="lead">
                            <Link className="btn btn-primary btn-lg m-2" to={"/best"} role="button">Best Sellers</Link>
                            <Link className="btn btn-success btn-lg m-2" to={"advanced_search"} role="button">Advanced Search</Link>

                        </p>

                </div>
        </div>

    );
}

export default Home;