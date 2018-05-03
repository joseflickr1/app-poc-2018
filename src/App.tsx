import * as React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { RouteProps } from 'react-router';
import { firebaseAuth } from './config/constants';
import * as firebase from 'firebase';
import Registrering from './components/Registrering';
import Logginn from './components/Logginn';
import Forside from './components/forside/Forside';
import Booking from './components/booking/Booking';

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
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" exact={true} component={Forside}/>
                        <PublicRoute
                            authed={this.state.authed}
                            component={Booking}
                            path="/booking"
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
