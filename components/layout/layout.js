import React from 'react'

import { motion } from 'framer-motion'

const Layout = ({ children, delay, className, key }) =>
        <motion.div
            key={ key }
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay
            }}
            className={ className }
        >
            { children }
        </motion.div>

export default Layout
