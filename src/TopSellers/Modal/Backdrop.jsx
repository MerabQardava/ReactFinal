import React from 'react';
import {createPortal} from "react-dom";
import {motion} from "framer-motion";
function BookDetailsModal(props) {


    return createPortal(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className={"backdrop"}>


        </motion.div>,document.getElementById('root')
    );
}

export default BookDetailsModal;