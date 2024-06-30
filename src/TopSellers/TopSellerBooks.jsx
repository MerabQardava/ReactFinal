import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getBooks} from "../ApiFunctions";
import BookComponent from "./BookComponent";
import {Col, Container, Row} from "react-bootstrap";
import LoaderSpinner from "../LoaderSpinner";


function TopSellerBooks(props) {
    const genre = useParams().genre;
    const [genreTop, setGenreTop] = useState()


    // console.log()
    useEffect(() => {
        getBooks(`lists.json`,{list:genre}).then(response=>{
            setGenreTop(response.results)
            console.log(genreTop)
        })
    }, []);
    return (
        <Container  fluid>
            <h1 className={"text-center m-4"}>Top Sellers</h1>
            {genreTop?
            <Row xs={1} md={2} lg={3} className="g-4"> {/* g-4 adds both vertical and horizontal spacing */}
                {genreTop?.map((item, index) => (
                    <Col key={index} className="d-flex">
                        <BookComponent item={item} />
                    </Col>
                ))}
            </Row>:<LoaderSpinner/>}

        </Container>
    );
}

export default TopSellerBooks;