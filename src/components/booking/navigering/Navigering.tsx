import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Typography from 'material-ui/Typography';

const style = {
    appbar: {
        backgroundColor: '#00AA8D',
        color: 'white',
    },
};
const Navigering = () => {
    return (
        <AppBar position="static" style={style.appbar}>
            <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    <IconButton color="inherit" aria-label="tilbake">
                        <ArrowBack/>
                    </IconButton>
                </div>
                <div>
                    <Typography
                        variant="body2"
                        style={{
                            color: 'white'
                        }}
                    >
                        BOOKING
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navigering;
