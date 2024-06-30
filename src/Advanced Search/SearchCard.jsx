import React, {useState} from 'react';
import {Button, Card} from "react-bootstrap";
import {AnimatePresence} from "framer-motion";
import Modal from "../TopSellers/Modal/Modal";

function SearchCard({item}) {
    const [modalOpen, setModalOpen] = useState(false)
    const close= ()=> {
        console.log("close")
        setModalOpen(false)
        document.body.style.overflow = '';
    }
    const open= () => {
        setModalOpen(true)
        document.body.style.overflow = 'hidden';
    }
    return (
        <Card style={{minWidth:"100%"}} >
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.author}</Card.Subtitle>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <Button variant={"outline-danger"} onClick={() => (modalOpen ? close() : open())}>More Info</Button>

            </Card.Body>
            <AnimatePresence initial={false} mode={"wait"} onExitComplete={()=>null}>

                {modalOpen && <Modal modalOpen={modalOpen} description={item.description} isbn={item.isbns[0].isbn13} handleClose={close} advanced={true} />}
            </AnimatePresence>
        </Card>
    );
}

export default SearchCard;