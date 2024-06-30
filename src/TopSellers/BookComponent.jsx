import React, {useContext, useEffect, useState} from 'react';
import {Button, Card} from "react-bootstrap";
import {AnimatePresence, motion} from "framer-motion";
import {Link} from "react-router-dom";
import Modal from "./Modal/Modal";
import {AppContext} from "../AppProvider";

function BookComponent({item}) {
    const [modalOpen, setModalOpen] = useState(false)
    const {favorites,setFavorites}=useContext(AppContext)
    const [isFavorite,setIsFavorite]=useState(item.book_details[0].title in favorites)

    useEffect(() => {
        setIsFavorite(item.book_details[0].title in favorites)
    }, [favorites]);




    // console.log(item)

    const close= ()=> {
        console.log("close")
        setModalOpen(false)
        document.body.style.overflow = '';
    }
    const open= () => {
        setModalOpen(true)
        document.body.style.overflow = 'hidden';
    }
    let details = item.book_details[0]

    const starOnClickHandler=()=>{
        if(isFavorite){
            const { [details.title]: _, ...newState } = favorites;
            setFavorites(newState)
        }else{
            setFavorites(prev=>{
                return {...prev,[details.title]:item}
            })
        }
    }

    // console.log(item)
    return (<Card style={{minWidth:"100%"}}>
        <div
            style={{
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: "0"
            }}
            className={"border-2 border"}>
            <div className={"fw-bold"}>{item.rank}</div>
        </div>
        <Card.Body>
            <Card.Title style={{maxWidth: "85%"}}>{details.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{details.author}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Genre: {item.list_name}</Card.Subtitle>

            <Card.Text>{details.description}</Card.Text>

            <Button variant={"outline-danger"} onClick={() => (modalOpen ? close() : open())}>More Info</Button>

            <a target="_blank" href={item.amazon_product_url} rel="noreferrer">

                <motion.img whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}} style={{maxHeight: "50px", cursor: "pointer", margin: "0 5px"}}
                            src="/buy-on-amazon-button-png-3.png"
                            alt=""/>
            </a>

            <div style={{display: "inline-block", position: 'relative', width: '2rem', height: '2rem'}}>
                <motion.i
                    whileHover={{scale: 1.3}}
                    whileTap={{scale: 0.8}}
                    onClick={starOnClickHandler}
                    style={{
                        position: 'absolute',

                        fontSize: '2rem',
                        color: isFavorite ? 'gold' : 'gray',
                        cursor: "pointer",
                    }}
                    className={`bi ${isFavorite ? 'bi-star-fill' : 'bi-star'}`}
                ></motion.i>
            </div>


        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Published On: {item.published_date}</small>
        </Card.Footer>

        <AnimatePresence initial={false} mode={"wait"} onExitComplete={() => null}>

            {modalOpen && <Modal modalOpen={modalOpen} description={details.description} isbn={details.primary_isbn13}
                                 handleClose={close} advanced={false}/>}
        </AnimatePresence>
    </Card>);
}

export default BookComponent;