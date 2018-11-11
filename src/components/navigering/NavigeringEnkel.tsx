import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';

import DecoratedToolbar from '../common/DecoratedToolbar';
import { primaryContrastText } from '../../assets/jss/material-fotohjelp-react';

interface EgenProps {
    tittel: string;
}

const NavigeringEnkel = ({tittel, history}: EgenProps & RouteComponentProps<{}>) => {
    return (
        <>
            <DecoratedToolbar>
                <div>
                    <IconButton
                        color="inherit"
                        aria-label="tilbake"
                        onClick={() => history.goBack()}
                    >
                        <ArrowBack/>
                    </IconButton>
                </div>
                <div>
                    <Typography
                        variant="body2"
                        style={{
                            color: primaryContrastText
                        }}

                    >
                        {tittel}
                    </Typography>
                </div>
            </DecoratedToolbar>
        </>
    );
};

export default withRouter(NavigeringEnkel);
