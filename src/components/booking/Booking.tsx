import * as React from 'react';
import NavigeringEnkel from '../navigering/NavigeringEnkel';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { booking } from '../../helpers/booking';
import { firebaseAuth } from '../../config/constants';

const style = {
    TextField: {
        width: '100%',
    },
    Button: {
        marginTop: '1rem'
    }
};

class Booking extends React.Component {
    navn: HTMLInputElement;
    fotoAv: HTMLInputElement;

    handleSubmit = () => {
        const user = firebaseAuth().currentUser;
        if (user) {
            booking(this.navn.value, this.fotoAv.value, user.uid);
        }
    }

    render () {
        return (
            <>
                <NavigeringEnkel tittel="BOOKING"/>

                <div style={{maxWidth: '375px', margin: '0 auto'}}>
                    <form>
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

                </div>
            </>
        );
    }
}

export default Booking;
