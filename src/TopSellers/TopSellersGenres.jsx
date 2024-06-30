import React, {useContext, useEffect} from 'react';
import {getBooks} from "../ApiFunctions";
import {AppContext} from "../AppProvider";
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import LoaderSpinner from "../LoaderSpinner";

function TopSellersGenres(props) {
    const {genres,setGenres}=useContext(AppContext);

    useEffect(() => {
        if(!genres){
           getBooks("lists/names")
               .then(data=>setGenres(data.results))
               .catch(error =>console.error("Failed to fetch books:",error))
        }
    }, []);

    console.log(genres)

    return (
        <Container>
            <h1 className={"text-center my-4"}>Top Seller Genres</h1>
            {genres?<Row>
                {genres?.map((name, index) => (
                    <Col key={index} sm={6} md={4} lg={3} className="mb-4">
                        <Link className={"text-decoration-none"} to={`${name.list_name_encoded}`}>
                            <Card border="primary" >
                                <Card.Body>
                                    <Card.Title className={"text-center"}>{name.display_name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>:<LoaderSpinner/>}
        </Container>
    );
}

export default TopSellersGenres;