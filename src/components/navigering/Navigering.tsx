import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Navigering = () => {
    return (
            <AppBar position="static" >
                <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Button
                        color="inherit"
                        href="/login"
                    >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
    );
};

export default Navigering;
