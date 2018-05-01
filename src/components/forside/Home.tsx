import * as React from 'react';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import { auth } from '../../helpers/auth';

const StyledBlockDiv = styled.div`
    width: 100%;
    text-align: center;
`;

function setErrorMsg(error: Error) {
    return {
        registerError: error.message
    };
}

export default class Home extends React.Component {
    email: HTMLInputElement;
    pw: HTMLInputElement;
    state = { registerError: null };
    handleSubmit = () => {
        /*tslint:disable-next-line*/
        //console.log('this.email', this.email.value);
         auth(this.email.value, this.pw.value)
             .catch((err: Error) => {
                 this.setState(setErrorMsg(err));
             });
    }

    render() {
        return (
            <div>
                <StyledBlockDiv>
                    <Typography variant="display3">Logg inn</Typography>
                </StyledBlockDiv>
                <StyledBlockDiv>
                    {this.state.registerError}
                    <form>
                        <TextField
                            id="epost"
                            label="E-post"
                            margin="normal"
                            inputProps={{ref: (email: HTMLInputElement) => this.email = email}}
                        />
                        <TextField
                            id="passord"
                            label="Passord"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            inputProps={{ref: (pw: HTMLInputElement) => this.pw = pw}}
                        />
                        <Button
                            variant="raised"
                            size="medium"
                            color="primary"
                            onClick={() => this.handleSubmit()}
                        >
                            Registrer
                        </Button>
                    </form>

                </StyledBlockDiv>
            </div>
        );
    }
}