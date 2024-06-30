import React, {useContext} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import BookComponent from "../TopSellers/BookComponent";
import {AppContext} from "../AppProvider";

function FavouriteBooks(props) {
    const {favorites,setFavorites}=useContext(AppContext)

    return (
        <Container  fluid>
            <h1 className={"text-center m-4"}>Favorites</h1>
            {Object.keys(favorites).length === 0?<h1 style={{color:"#973131"}} className={"text-center mt-5"}>You Have No Favorites Saved</h1>:
            <Row xs={1} md={2} lg={3} className="g-4"> {/* g-4 adds both vertical and horizontal spacing */}
                {favorites?(Object.keys(favorites).map((item, index) => (
                    // console.log(item[item])
                    <Col key={index} className="d-flex">
                        <BookComponent item={favorites[item]} />
                    </Col>
                ))):""}
            </Row>}

        </Container>
    );
}

export default FavouriteBooks;