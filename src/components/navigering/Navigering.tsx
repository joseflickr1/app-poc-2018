import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { primaryColor } from '../../assets/jss/material-fotohjelp-react';
import ButtonAuth from './ButtonAuth';

const logo = require('./logo.svg');

const style = {
    appbar: {
        backgroundColor: primaryColor,
        color: 'white',
        height: '8rem'
    },
    logoContainer: {
        border: '2px solid',
        borderRadius: '6px',
        padding: '4px 6px 0px 5px',
        width: '1rem',
        margin: '10px auto 5px auto',
    },
    logo: {
        width: '1rem',
        height: '1rem',
    }

};
const Navigering = () => {
    return (
        <AppBar position="static" style={style.appbar}>
            <Toolbar>
                <div style={{width: '100%'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                        <ButtonAuth />
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <div style={style.logoContainer}>
                            <img src={logo} alt="logo" style={style.logo}/>
                        </div>
                        <Typography
                            variant="body2"
                            style={{
                                color: 'white'
                            }}
                        >
                            FOTOHJELP
                        </Typography>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navigering;
