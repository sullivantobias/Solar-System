import React from "react";

import Link from "next/link";

import Title from "../title";

import style from './header.module.scss';

const Header = ({ planets, isBackDisplayed }) =>
    <div className={ style.Header }>
        { isBackDisplayed &&
            <Link href='/solar-system'>
                <a className={ style.Link }> Back </a>
            </Link>
        }
        { planets.map(({ name }) => <Title tag={ 6 } title={ name } />) }
    </div>


export default Header;
