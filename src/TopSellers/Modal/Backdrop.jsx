import React from 'react';
import {createPortal} from "react-dom";
import {motion} from "framer-motion";
function Backdrop({children,onClick}) {
    // console.log(children)

    return createPortal(
        <motion.div
            className="backdrop"
            onClick={onClick}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            {children}
        </motion.div>, document.getElementById('root')

    );
}

export default Backdrop;