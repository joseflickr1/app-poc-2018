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

import './SingleDatePickerOverride.css';

const style = {
    TextField: {
        width: '100%',
    },
    Button: {
        marginTop: '1rem'
    }
};

const StyledBlockDiv = styled.div`
    max-width: 375px;
    margin: 4rem 10;
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
                    list.push(moment(snapshot.val()[key].dato));
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

    render () {
        const { date, datesList } = this.state;
        const { navn, fotoAv } = this.state.bookingInfo;
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
                            focused={true}
                            date={date}
                            daySize={42}
                            transitionDuration={0}
                            id="date_input"
                        />
                        <TextField
                            id="navn"
                            label="Navn"
                            margin="normal"
                            value={navn}
                            onChange={this.handleInputChange('navn')}
                            style={style.TextField}
                        />
                        <TextField
                            id="hvemskaltasbildeav"
                            label="Hvem skal tas bilde av"
                            margin="normal"
                            value={fotoAv}
                            onChange={this.handleInputChange('fotoAv')}
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
