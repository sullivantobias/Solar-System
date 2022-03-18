import React, { useState } from "react";

import classNames from "classnames";

import Layout from "../layout/layout";

import style from './burger.module.scss';

const Burger = ( { links }) => {
    const [ open, setOpen ] = useState(false);

    const handleClick = () => setOpen(!open);

    const variants = {
        hidden: { height: 0 },
        enter: { height: '100vh' },
    }

    const transitions = { duration: 0.3 };

    return <div className={ style.Container }>
        <button className={ classNames( style.Burger, {
            [style.Open]: open
        }) } onClick={ handleClick }>
            <span></span>
            <span></span>
            <span></span>
        </button>
        { open &&
            <Layout className={ style.Menu }passedTransition={ transitions }
                    passedVariants={ variants }>
                { links(style, 4, handleClick) }
            </Layout>
        }
    </div>
}

export default Burger;
