import React from 'react';
import classNames from "classnames";

import style from './planet.module.scss';

const Planet = ({ children, planet, onMouseEnter, onMouseLeave }) => {
    return (
        <div onMouseLeave={() => onMouseLeave('')}
             onMouseEnter={() => onMouseEnter(planet.name)}
             className={classNames(style.Planet, {
          [planet.style]: planet
        })}>
            {children}
        </div>
    );
}

export default Planet;
