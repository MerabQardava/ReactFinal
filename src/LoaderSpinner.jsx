import React from 'react';
import {Spinner} from "react-bootstrap";

function LoaderSpinner(props) {
    return (
        <div style={{display: "flex", justifyContent: "center"}}><Spinner style={{width: '6rem', height: '6rem'}}
                                                                          animation="border" variant="danger"/></div>
    );
}

export default LoaderSpinner;