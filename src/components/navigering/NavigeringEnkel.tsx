import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import DecoratedAppbar from '../common/DecoratedAppbar';
import DecoratedToolbar from '../common/DecoratedToolbar';

interface EgenProps {
    tittel: string;
}

const NavigeringEnkel = ({tittel, history}: EgenProps & RouteComponentProps<{}>) => {
    return (
        <>
        <DecoratedAppbar>
            <DecoratedToolbar style={{display: 'flex', justifyContent: 'space-between'}}>
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
                            color: 'white'
                        }}

                    >
                        {tittel}
                    </Typography>
                </div>
            </DecoratedToolbar>
        </DecoratedAppbar>
        </>
    );
};

export default withRouter(NavigeringEnkel);
