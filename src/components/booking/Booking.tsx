import * as React from 'react';
import NavigeringEnkel from '../navigering/NavigeringEnkel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { booking } from '../../helpers/booking';
import { firebaseAuth, ref } from '../../config/constants';
import { RouteComponentProps } from 'react-router';
import { SingleDatePicker, isSameDay } from 'react-dates';

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
//tslint:disable
type EgenState = {
    focused: boolean,
    date: moment.Moment | null,
    datesList: moment.Moment[],
}

//tslint:disable
class Booking extends React.Component<RouteComponentProps<{}>, EgenState> {
    navn: HTMLInputElement;
    fotoAv: HTMLInputElement;

    //tslint:disable
    constructor(props: any) {
        super(props);

        this.state = {
            focused: false,
            date: null,
            datesList: []
        };

        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    componentWillMount() {
        ref.child('calender/').once('value')
            .then((snapshot) => {

                // todo bedre
                // tslint:disable
                let list = [];
                for (let key in snapshot.val()) {
                    list.push(moment(snapshot.val()[key].dato));
                }

                this.setState({
                    datesList: list,
                });
            });
    }


    //tslint:disable
    onDatesChange(date: any) {
        this.setState({
            date,
        });
    }

    //tslint:disable
    onFocusChange(focused: { focused: boolean }) {
        this.setState({ focused: focused.focused});
    }

    handleSubmit = () => {
        const { history } = this.props;
        history.push('/profil');

        const user = firebaseAuth().currentUser;
        if (user) {
            // todo fikse blank
            const dd = this.state.date ? String(this.state.date) : '';
            booking(dd, this.navn.value, this.fotoAv.value, user.uid);
        }
    }

    render () {
        const { focused, date, datesList } = this.state;
        return (
            <>
                <NavigeringEnkel tittel="BOOKING"/>

                <StyledBlockDiv>
                    <form>
                        <SingleDatePicker
                            isDayBlocked={day1 => datesList.some(day2 => isSameDay(day1, day2))}
                            numberOfMonths={1}
                            onDateChange={this.onDatesChange}
                            onFocusChange={this.onFocusChange}
                            focused={focused}
                            date={date}
                            id="date_input"
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
