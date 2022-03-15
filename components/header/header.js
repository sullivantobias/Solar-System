import React from "react";

import classNames from "classnames";

import Link from "next/link";

import Title from "../title";
import Burger from "../burger";

import style from './header.module.scss';

const Header = ({ planets, isBackDisplayed, planetId }) => {
    const root = 'solar-system/planets/';

    const links = (style, onClick) =>
        planets.map(({ name, id }) =>
            <Link href={`${root}${name.toLowerCase()}`}>
                <a className={
                    classNames(style.Title, { [style.isCurrent]: id === planetId }) }
                    onClick={ onClick }>
                    <Title tag={ 6 } title={ name } />
                </a>
             </Link>
        )

    return <div className={ classNames( style.Header, {
        [style.Fixed]: !isBackDisplayed
    })}>
        <Burger links={ links } />
        { isBackDisplayed &&
            <Link href='/solar-system'>
                <a className={ style.Link }> Back </a>
            </Link>
        }
        { links(style) }
    </div>
}

export default Header;
