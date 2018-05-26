import * as React from 'react';
import NavigeringEnkel from '../navigering/NavigeringEnkel';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import styled from 'styled-components';
import { booking } from '../../helpers/booking';
import { firebaseAuth } from '../../config/constants';
import { RouteComponentProps } from 'react-router';
import { DateRangePicker, FocusedInputShape, isSameDay } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import * as moment from 'moment';

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

const datesList = [
    moment(),
    moment().add(1, 'days'),
    moment().add(3, 'days'),
    moment().add(9, 'days'),
    moment().add(10, 'days'),
    moment().add(11, 'days'),
    moment().add(12, 'days'),
    moment().add(13, 'days'),
];

//tslint:disable
class Booking extends React.Component<RouteComponentProps<{}>, any> {
    navn: HTMLInputElement;
    fotoAv: HTMLInputElement;
    dato: HTMLInputElement;

    //tslint:disable
    constructor(props: any) {
        super(props);

        this.state = {
            focusedInput: null,
            startDate: null,
            endDate: null,
        };

        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }
    //tslint:disable
    onDatesChange({ startDate, endDate }: any) {
        this.setState({
            startDate: startDate && startDate,
            endDate: endDate && endDate,
        });
    }

    onFocusChange(focusedInput: FocusedInputShape | null) {
        this.setState({ focusedInput });
    }

    handleSubmit = () => {
        const { history } = this.props;
        history.push('/profil');
        const user = firebaseAuth().currentUser;
        if (user) {
            booking(this.dato.value, this.navn.value, this.fotoAv.value, user.uid);
        }
    }

    render () {
        const { focusedInput, startDate, endDate } = this.state;

        return (
            <>
                <NavigeringEnkel tittel="BOOKING"/>

            <DateRangePicker
                isDayBlocked={day1 => datesList.some(day2 => isSameDay(day1, day2))}
                onDatesChange={this.onDatesChange}
                onFocusChange={this.onFocusChange}
                focusedInput={focusedInput}
                startDate={startDate}
                endDate={endDate}
                startDateId='startDate'
                startDatePlaceholderText= 'Start Date'
                endDateId= 'endDate'
                endDatePlaceholderText = 'End Date'
            />

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
