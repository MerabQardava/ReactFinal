import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion"
import Backdrop from "./Backdrop";
import {bookLookup} from "../../ApiFunctions";
import {Spinner} from "react-bootstrap";

const dropIn = {
    hidden: {
        y: "-100vh", opacity: 0,
    }, visible: {
        y: "0", opacity: 1, transition: {
            duration: 0.1, type: "spring", damping: 25, stiffness: 500,
        },
    }, exit: {
        y: "100vh", opacity: 0,
    },
};


function Modal({handleClose, description, isbn}) {
    const [bookData, setBookData] = useState();
    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        setLoading(false);
    };
    useEffect(() => {
        bookLookup(isbn).then(response => {
            console.log(response[`ISBN:${isbn}`])
            setBookData(response[`ISBN:${isbn}`])
        })
    }, []);
    return (<Backdrop onClick={handleClose}>
        <motion.div
            onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
            className=" card mb-3 bookmodal orange-gradient"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="row g-0">
                <div className="col-md-4">
                    {loading && (
                        <div style={{height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Spinner animation="border" variant="danger" style={{width: '3rem', height: '3rem'}}/>
                        </div>)}
                    <img
                        src={bookData?.cover?.large}
                        onLoad={handleImageLoad}
                        style={{
                            display: loading ? 'none' : 'block',
                            maxHeight: '350px',
                            minHeight: '300px',
                            borderRadius: '6px'
                        }}
                        className="img-fluid rounded-start"
                        alt="..."
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{bookData?.title}</h5>
                        <p className="card-text">
                            <small className="text-body-secondary">By {bookData?.authors[0]?.name}</small>
                        </p>
                        <p className="card-text">{description}</p>
                        <p className="card-text">Number of pages: {bookData?.number_of_pages}</p>
                        <p className="card-text">ISBN13: {isbn}</p>
                        <p className="card-text">
                            <small className="text-body-secondary">Publish Date: {bookData?.publish_date}</small>
                        </p>
                    </div>
                </div>
            </div>

            <button className={"modalCloseButton"} onClick={handleClose}>×</button>
        </motion.div>

    </Backdrop>);
}

export default Modal;