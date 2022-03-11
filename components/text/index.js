import React from "react";

import classNames from "classnames";

import style from './text.module.scss';

const Text = ({ children, className}) =>
    <p className={ classNames(style.Text, {
        [className]: className
    }) }>
        {children}
    </p>

export default Text;
