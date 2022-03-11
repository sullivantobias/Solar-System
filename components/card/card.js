import React from "react";

import style from './card.module.scss';

const Card = ({ info }) =>
    <div className={ style.Card }>
        <div className={ style.Label }>{ Object.keys(info)[0] }</div>
        <div className={ style.Value }>{ Object.values(info)[0] }</div>
    </div>


export default Card;
