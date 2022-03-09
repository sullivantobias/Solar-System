import React from 'react';
import classNames from "classnames";

import style from './planet.module.scss';

const Planet = ({ children, planet, onMouseEnter, onMouseLeave, onClick }) =>
        <div onClick={onClick}
             onMouseLeave={ onMouseLeave }
             onMouseEnter={ onMouseEnter }
             className={classNames(style.Planet, {
          [planet.style]: planet
        })}>
            {children}
        </div>

export default Planet;
