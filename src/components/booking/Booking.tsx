import * as React from 'react';
import NavigeringEnkel from '../navigering/NavigeringEnkel';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import styled from 'styled-components';
import { booking } from '../../helpers/booking';
import { firebaseAuth } from '../../config/constants';
import { RouteComponentProps } from 'react-router';

const style = {
    TextField: {
        width: '100%',
    },
    Button: {
        marginTop: '1rem'
    }
};

const StyledBlockDiv = styled.div`
    max-width: 300px;
    margin: 4rem auto;
`;

class Booking extends React.Component<RouteComponentProps<{}>> {
    navn: HTMLInputElement;
    fotoAv: HTMLInputElement;
    dato: HTMLInputElement;

    handleSubmit = () => {
        const { history } = this.props;
        history.push('/profil');
        const user = firebaseAuth().currentUser;
        if (user) {
            booking(this.dato.value, this.navn.value, this.fotoAv.value, user.uid);
        }
    }

    render () {
        return (
            <>
                <NavigeringEnkel tittel="BOOKING"/>
                <StyledBlockDiv>
                    <form>
                        <TextField
                            id="date"
                            label="Dato"
                            type="date"
                            defaultValue="2017-05-24"
                            inputProps={{ref: (dato: HTMLInputElement) => this.dato = dato}}
                        />
                        <TextField
                            id="navn"
                            label="Navn"
                            margin="normal"
                            inputProps={{ref: (navn: HTMLInputElement) => this.navn = navn}}
                            style={style.TextField}
                        />
                        <TextField
                            id="hvemskaltasbildeav"
                            label="Hvem skal tas bilde av"
                            margin="normal"
                            inputProps={{ref: (fotoAv: HTMLInputElement) => this.fotoAv = fotoAv}}
                            style={style.TextField}
                        />
                        <Button
                            variant="raised"
                            size="medium"
                            color="primary"
                            style={style.Button}
                            onClick={this.handleSubmit}
                        >
                            Book avtale
                        </Button>
                    </form>

                </StyledBlockDiv>
            </>
        );
    }
}

export default Booking;
