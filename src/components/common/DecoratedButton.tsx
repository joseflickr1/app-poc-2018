//tslint:disable
import * as React from 'react';
import Button from '@material-ui/core/Button';

import {withStyles} from '@material-ui/core/styles';
import {primaryLighterColor} from "../../assets/jss/material-fotohjelp-react";

const decorate = withStyles(() => ({
    root: {
        backgroundColor: primaryLighterColor,
        color: '#f2f2f2',
        margin: '0.5rem 0',
        width: '100%',
        padding: '16px',
        borderRadius: '8px'
    }
}));

const DecoratedButton = decorate<any>(({classes, children, props}) => (
    <Button
        {...props}
        classes={classes}
    >
        {children}
    </Button>
));

export default DecoratedButton;
