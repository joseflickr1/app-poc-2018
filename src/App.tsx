import * as React from 'react';
import * as firebase from 'firebase';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { RouteProps } from 'react-router';
import Registrering from './components/Registrering';
import Logginn from './components/Logginn';
import Forside from './components/forside/Forside';
import Booking from './components/booking/Booking';
import { isAuthenticated } from './helpers/auth';
import { firebaseAuth } from './config/constants';
import CircularProgress from '@material-ui/core/CircularProgress';
import Profil from './components/profil/Profil';

const style = {
    circlularProgress: {
        maxWidth: '38px',
        margin: '6vh auto'
    }
};

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

function PrivateRoute({authed, ...rest}: PR & RouteProps) {
    if (authed || isAuthenticated()) {
        return <Route {...rest} component={rest.component}/>;
    } else {
        return <Redirect to={{pathname: '/logginn', state: {from: rest.location}}}/>;
    }

}

class App extends React.Component {
    removeListener: () => void;
    state = {
        authed: false,
        loading: true,
    };

    componentWillMount() {
        this.removeListener = firebaseAuth().onAuthStateChanged((user: firebase.User) => {
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
        if (this.state.loading) { return <div style={style.circlularProgress}><CircularProgress/></div>; }

        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" exact={true} component={Forside}/>
                        <PrivateRoute
                            authed={this.state.authed}
                            component={Booking}
                            path="/booking"
                        />
                        <PrivateRoute
                            authed={this.state.authed}
                            component={Profil}
                            path="/profil"
                        />
                        <PublicRoute
                            authed={this.state.authed}
                            component={Registrering}
                            path="/registrer"
                        />
                        <PublicRoute
                            authed={this.state.authed}
                            component={Logginn}
                            path="/logginn"
                        />
                        <Route render={() => <h3>No Match</h3>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
