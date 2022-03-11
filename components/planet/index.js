import React from 'react';
import classNames from "classnames";

import style from './planet.module.scss';

const Planet = ({ children, planet, onMouseEnter, onMouseLeave, addStyle }) =>
        <div onMouseLeave={ onMouseLeave }
             onMouseEnter={ onMouseEnter }
             className={classNames(style.Planet, {
          [planet.style]: planet,
          [addStyle]: addStyle
        })}>
            {children}
        </div>

export default Planet;
