import React from 'react';
import classNames from "classnames";

import style from './planet.module.scss';

const Planet = ({ planet }) => {
    return (
        <div className={classNames(style.Planet, {
          [planet.style]: planet
        })}></div>
    );
}

export default Planet;
