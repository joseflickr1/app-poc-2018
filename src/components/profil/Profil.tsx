import * as React from 'react';
import NavigeringEnkel from '../navigering/NavigeringEnkel';
import styled from 'styled-components';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import { hentEpost, hentForsteBokstavEpost } from '../../helpers/auth';
import { firebaseAuth, ref } from '../../config/constants';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/Progress/LinearProgress';

const StyledBlockDiv = styled.div`
    max-width: 320px;
    margin: 4rem auto;
`;

const StyledAvatarWrapper = styled.div`
    text-align: center;
`;

const style = {
    avatar: {
        backgroundColor: 'green',
        margin: '0px auto 10px auto',
        maxWidth: '40px',
    },
    paper: {
        padding: '1rem',
        margin: '0.5rem 0'
    }
};

class Profil extends React.Component {

    state = {
        bookings: [{navn: '', fotograferingAv: ''}],
        loading: true
    };

    componentWillMount() {
        const user = firebaseAuth().currentUser;

        if (user) {
            ref.child('booking/' + user.uid).once('value')
                .then((snapshot) => {

                    // todo bedre
                    // tslint:disable
                    let list = [];
                    for (let key in snapshot.val()) {
                        list.push(snapshot.val()[key]);
                    }

                    this.setState({
                        bookings: list,
                        loading: false
                    });
                });
        }
    }

    render() {
        return (
            <>
            <NavigeringEnkel tittel="PROFIL"/>

            <StyledBlockDiv>
                <StyledAvatarWrapper>
                    <Avatar aria-label="Profil" style={style.avatar}>
                        {hentForsteBokstavEpost()}
                    </Avatar>
                    <Typography variant="subheading">
                        {hentEpost()}
                    </Typography>
                </StyledAvatarWrapper>

                <div>
                    {
                        this.state.loading
                            ? <LinearProgress/>
                            : this.state.bookings.map((v, i) => {
                                return (
                                    <Paper style={style.paper} key={v.navn + '-' + i}>
                                        <Typography variant="subheading">
                                            {v.navn} - {v.fotograferingAv}
                                        </Typography>
                                    </Paper>
                                );
                            })
                    }
                </div>
            </StyledBlockDiv>
            </>
        );
    }
}

export default Profil;
