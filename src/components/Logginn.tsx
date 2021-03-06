import * as React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { login } from '../helpers/auth';
import NavigeringEnkel from './navigering/NavigeringEnkel';
import { RouteComponentProps } from 'react-router';
import DecoratedButton from './common/DecoratedButton';

const StyledBlockDiv = styled.div`
    max-width: 300px;
    margin: 4rem auto;
`;

const style = {
    TextField: {
        width: '100%'
    }
};

function setErrorMsg(error: Error) {
    return {
        registerError: error.message
    };
}

export default class Registrering extends React.Component<RouteComponentProps<{}>> {
    email: HTMLInputElement;
    pw: HTMLInputElement;
    state = { registerError: null };

    handleSubmit = () => {
        login(this.email.value, this.pw.value)
             .then(() => {
                const { history, location } = this.props;
                const { state } = location;
                const { from } = state;
                history.push(from || '/');
             })
             .catch((err: Error) => {
                 this.setState(setErrorMsg(err));
             });
    }

    render() {
        return (
            <div>
                <NavigeringEnkel tittel="LOGIN"/>
                <StyledBlockDiv>
                    {this.state.registerError}
                    <form>
                        <TextField
                            id="epost"
                            label="E-post"
                            margin="normal"
                            inputProps={{ref: (email: HTMLInputElement) => this.email = email}}
                            style={style.TextField}
                        />
                        <TextField
                            id="passord"
                            label="Passord"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            inputProps={{ref: (pw: HTMLInputElement) => this.pw = pw}}
                            style={style.TextField}
                        />
                        <DecoratedButton
                            variant="raised"
                            size="medium"
                            color="primary"
                            props={{
                                onClick: () => this.handleSubmit()
                            }}
                        >
                            LOGG INN
                        </DecoratedButton>
                        <DecoratedButton props={{href: '/registrer' }}>
                            REGISTRERING
                        </DecoratedButton>
                    </form>

                </StyledBlockDiv>
            </div>
        );
    }
}