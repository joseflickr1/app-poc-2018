//tslint:disable
import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';

import {withStyles} from '@material-ui/core/styles';
import { primaryContrastText } from "../../assets/jss/material-fotohjelp-react";

const decorate = withStyles(() => ({
    root: {
        backgroundColor: 'transparent',
        color: primaryContrastText,
    }
}));

const DecoratedAppbar = decorate<any>(({classes, children}) => (
    <AppBar position="static" classes={classes}>
        {children}
    </AppBar>
));

export default DecoratedAppbar;
