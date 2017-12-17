import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import styled from 'styled-components';

// import './App.css';

const StyledDiv = styled.div`
    margin: 4em auto;
    width: 400px;
`;

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <StyledDiv className="poc-app">
                    <Switch>
                        <Route path="/" exact={true} component={Home}/>
                        <Route render={() => <h3>No Match</h3>}/>
                    </Switch>
                </StyledDiv>
            </BrowserRouter>
        );
    }
}

export default App;
