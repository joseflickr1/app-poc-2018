//tslint:disable
import * as React from 'react';
import Toolbar from '@material-ui/core/Toolbar';

import {withStyles} from '@material-ui/core/styles';

const decorate = withStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
    }
}));

const DecoratedToolbar = decorate<any>(({classes, children}) => (
    <Toolbar classes={classes}>
        {children}
    </Toolbar>
));

export default DecoratedToolbar;
