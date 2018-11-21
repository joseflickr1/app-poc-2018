//tslint:disable
import * as React from 'react';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';

import {withStyles} from '@material-ui/core/styles';
import {primaryContrastText} from "../../assets/jss/material-fotohjelp-react";

/*
* How to use

import DecoratedTextInput from '../common/DecoratedTextInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';

* <DecoratedTextInput
    id="Navn"
    label="Navn"
    startAdornment={
        <InputAdornment position="start" >
            <AccountCircle/>
        </InputAdornment>
    }

/>
* */

const decorate = withStyles(() => ({
    root: {
        color: primaryContrastText,
        padding: '5px 10px',
        borderRadius: '5px'
    },
    underline: {
        "&:hover:not($disabled):before,&:before": {
            borderBottom: 'none !important'
        },
        "&:after": {
            borderBottom: 'none !important'
        }
    },
    error: {
        border: '1px solid red',
    }
}));

const DecoratedTextInput = decorate<any>(({id, label, inputProps, startAdornment, classes}) => (
    <FormControl fullWidth={true}>
        <Input
            placeholder={label}
            classes={classes}
            inputProps={{
                'aria-label': label,
            }}
            startAdornment={startAdornment}
        />
    </FormControl>
));

export default DecoratedTextInput;
