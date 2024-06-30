import React, {useContext, useEffect} from 'react';
import {getBooks} from "../ApiFunctions";
import {AppContext} from "../AppProvider";
import {Card, Col, Container, Row} from "react-bootstrap";

function TopSellers(props) {
    const {genres,setGenres}=useContext(AppContext);

    useEffect(() => {
        if(!genres){
           getBooks()
               .then(data=>setGenres(data.results))
               .catch(error =>console.error("Failed to fetch books:",error))
        }
    }, []);

    console.log(genres)

    return (
        <Container>
            <Row>
                {genres?.map((name, index) => (
                    <Col key={index} sm={6} md={4} lg={3} className="mb-4">
                        <Card border="primary" >
                            <Card.Body>
                                <Card.Title className={"text-center"}>{name.display_name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default TopSellers;