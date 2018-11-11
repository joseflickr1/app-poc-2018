//tslint:disable
import * as React from 'react';
import Button from '@material-ui/core/Button';

import {withStyles} from '@material-ui/core/styles';
import {primaryLighterColor, primaryContrastText} from "../../assets/jss/material-fotohjelp-react";

const decorate = withStyles(() => ({
    root: {
        backgroundColor: primaryLighterColor,
        color: primaryContrastText,
        margin: '2rem 0'
    }
}));

const DecoratedButtonLink = decorate<any>(({classes, children, props}) => (
    <Button {...props} classes={classes} >
        {children}
    </Button>
));

export default DecoratedButtonLink;
