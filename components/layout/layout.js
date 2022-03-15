import React from 'react'

import { motion } from 'framer-motion'

const Layout = ({ children, delay, className, key, passedVariants, passedTransition }) => {
    const variants = passedVariants ? passedVariants : {
        hidden: { scale: 0 },
        enter: { scale: 1 },
        exit: { scale: 0 },
    }

    const transition = passedTransition ? passedTransition : {
        type: 'spring',
        stiffness: 120,
        delay
    }

    return <motion.div
        key={ key }
        variants={ variants }
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={ transition }
        className={ className }
    >
        { children }
    </motion.div>
}

export default Layout
