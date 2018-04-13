import * as React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { RouteProps } from 'react-router';
import { firebaseAuth } from './config/constants';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';

import Home from './components/Home';
import Forside from './components/Forside';

interface PR {
    authed: boolean;
}

function PublicRoute({authed, ...rest}: PR & RouteProps) {
    if (authed) {
        return <Redirect to={{pathname: '/', state: {from: rest.location}}}/>;
    } else {
        return <Route {...rest} component={rest.component}/>;
    }
}

class App extends React.Component {
    removeListener: () => void;
    state = {
        authed: false,
        loading: true,
    };

    componentDidMount() {
        this.removeListener = firebaseAuth().onAuthStateChanged((user: { email: 'string' }) => {
            if (user) {
                this.setState({
                    authed: true,
                    loading: false,
                    email: user.email,
                });
            } else {
                this.setState({
                    authed: false,
                    loading: false,
                    email: ''
                });
            }
        });
    }

    componentWillUnmount() {
        this.removeListener();
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <AppBar position="static">
                        <Toolbar>
                            <Button
                                color="inherit"
                                href="/login"
                            >
                                Login
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <Switch>
                        <Route path="/" exact={true} component={Forside}/>
                        <PublicRoute
                            authed={this.state.authed}
                            component={Home}
                            path="/login"
                        />
                        <Route render={() => <h3>No Match</h3>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
