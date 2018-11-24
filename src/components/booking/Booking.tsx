import * as React from 'react';
import NavigeringEnkel from '../navigering/NavigeringEnkel';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { booking } from '../../helpers/booking';
import { firebaseAuth, ref } from '../../config/constants';
import DecoratedButton from '../common/DecoratedButton';
import { RouteComponentProps } from 'react-router';
import { DayPickerSingleDateController, isSameDay } from 'react-dates';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import * as moment from 'moment';

import './SingleDatePickerOverride.css';
import DecoratedTextInput from '../common/DecoratedTextInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';

const style = {
    TextField: {
        width: '100%',
    },
    Button: {
        marginTop: '1rem'
    }
};

const StyledBlockDiv = styled.div`
    max-width: 335px;
    margin: 2rem auto;
`;

type bookingInfo = {
    navn: string,
    fotoAv: string,
};

type EgenState = {
    focused: boolean,
    date: moment.Moment | null,
    datesList: moment.Moment[],
    bookingInfo: bookingInfo
};

class Booking extends React.Component<RouteComponentProps<{}>, EgenState> {

    // tslint:disable-next-line
    constructor(props: any) {
        super(props);

        this.state = {
            focused: false,
            date: null,
            datesList: [],
            bookingInfo: {
                navn: '',
                fotoAv: '',
            }
        };

        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount() {
        ref.child('calender/').once('value')
            .then((snapshot) => {

                // todo bedre
                // tslint:disable-next-line
                let list = [];
                // tslint:disable-next-line
                for (let key in snapshot.val()) {
                    list.push(moment(new Date(snapshot.val()[key].dato)));
                }
                this.setState({
                    datesList: list,
                });
            });
    }

    onDatesChange(date: moment.Moment) {
        this.setState({
            date,
        });
    }

    onFocusChange(focused: { focused: boolean }) {
        this.setState({ focused: focused.focused});
    }

    handleSubmit = () => {
        const { history } = this.props;
        history.push('/profil');

        const user = firebaseAuth().currentUser;
        if (user) {
            // todo fikse blank, påkrevd felt
            const dd = this.state.date ? String(this.state.date) : '';
            booking(dd, this.state.bookingInfo.navn, this.state.bookingInfo.fotoAv, user.uid);
        }
    }

    // tslint:disable-next-line
    handleInputChange = (name: string) => (event: any) => {
        let info = {...this.state.bookingInfo,
            [name]: event.target.value
        };
        this.setState({
            bookingInfo: info
        });
    }

    isBlocked = (day1: moment.Moment) => this.state.datesList.some(day2 => isSameDay(day1, day2));
    isNotBlocked = (day1: moment.Moment) => false;

    render () {
        const { focused, date, datesList } = this.state;
        const { navn, fotoAv } = this.state.bookingInfo;

        return (
            <>
                <NavigeringEnkel tittel="BOOKING"/>

                <StyledBlockDiv>
                    <form>
                        <TextField
                            id="navn"
                            label="Navn"
                            margin="normal"
                            value={navn}
                            onChange={this.handleInputChange('navn')}
                            style={style.TextField}
                        />

                        <DecoratedTextInput
                            id="Navn"
                            label="Navn"
                            value={navn}
                            onChange={this.handleInputChange('navn')}
                            startAdornment={
                                <InputAdornment position="start" >
                                    <AccountCircle/>
                                </InputAdornment>
                            }
                        />

                        <TextField
                            id="hvemskaltasbildeav"
                            label="Hvem skal tas bilde av"
                            margin="normal"
                            value={fotoAv}
                            onChange={this.handleInputChange('fotoAv')}
                            style={style.TextField}
                        />
                        <DayPickerSingleDateController
                            isDayBlocked={datesList.length !== 0 ? this.isBlocked : this.isNotBlocked}
                            numberOfMonths={1}
                            onDateChange={this.onDatesChange}
                            onFocusChange={this.onFocusChange}
                            focused={focused}
                            date={date}
                            daySize={42}
                        />
                        <DecoratedButton
                            props={{onClick: this.handleSubmit }}
                        >
                            Book avtale
                        </DecoratedButton>
                    </form>

                </StyledBlockDiv>
            </>
        );
    }
}

export default Booking;
