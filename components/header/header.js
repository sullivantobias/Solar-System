import React from "react";

import classNames from "classnames";

import Link from "next/link";

import Title from "../title";

import style from './header.module.scss';

const Header = ({ planets, isBackDisplayed, planetId }) => {
    const root = '/solar-system/planets/';

    return <div className={ style.Header }>
        { isBackDisplayed &&
            <Link href='/solar-system'>
                <a className={ style.Link }> Back </a>
            </Link>
        }
        { planets.map(({ name, id }) => <Link href={`${root}${name.toLowerCase()}`}>
                <a className={
                    classNames(style.Title, { [style.isCurrent]: id === planetId }) }>
                    <Title tag={ 6 } title={ name } />
                </a>
            </Link>
        ) }
    </div>
}

export default Header;
