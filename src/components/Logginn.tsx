import * as React from 'react';
import Button from 'material-ui/Button';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import { login } from '../helpers/auth';
import NavigeringEnkel from './navigering/NavigeringEnkel';

const StyledBlockDiv = styled.div`
    max-width: 320px;
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

export default class Registrering extends React.Component {
    email: HTMLInputElement;
    pw: HTMLInputElement;
    state = { registerError: null };
    handleSubmit = () => {
         login(this.email.value, this.pw.value)
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
                        <Button
                            variant="raised"
                            size="medium"
                            color="primary"
                            onClick={() => this.handleSubmit()}
                        >
                            LOGG INN
                        </Button>
                        <Button href="/registrer">
                            REGISTRERING
                        </Button>
                    </form>

                </StyledBlockDiv>
            </div>
        );
    }
}