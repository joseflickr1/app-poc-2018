import * as React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { RouteProps } from 'react-router';
import { firebaseAuth } from './config/constants';

import Home from './components/Home';
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: 4em auto;
    width: 400px;
`;

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
    removeListener: any;
    state = {
        authed: false,
        loading: true,
    };

    componentDidMount() {
        this.removeListener = firebaseAuth().onAuthStateChanged((user: any) => {
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
                <StyledDiv className="poc-app">
                    <Switch>
                        <Route path="/" exact={true} component={Home}/>
                        <PublicRoute
                            authed={this.state.authed}
                            component={Home}
                            path="/login"
                        />
                        <Route render={() => <h3>No Match</h3>}/>
                    </Switch>
                </StyledDiv>
            </BrowserRouter>
        );
    }
}

export default App;
