import React from 'react'

import { motion } from 'framer-motion'

const Layout = ({ children, delay, className, key }) => {
    const variants = {
        hidden: { scale: 0 },
        enter: { scale: 1 },
        exit: { scale: 0 },
    }

    return <motion.div
        key={ key }
        variants={ variants }
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'spring', stiffness: 120, delay }}
        className={ className }
    >
        { children }
    </motion.div>
}

export default Layout
