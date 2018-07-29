//tslint:disable
import * as React from 'react';
import Button from '@material-ui/core/Button';
import {isAuthenticated, logout} from "../../helpers/auth";

const ButtonAuth = () => {
    const tekst = isAuthenticated() ? 'Logg ut' : 'Logg inn';
    const props = isAuthenticated() ? {onClick: logout} : {href: '/logginn'};

    return (<Button
        color="inherit"
        {...props}
    >
        {tekst}
    </Button>)
};

export default ButtonAuth;
