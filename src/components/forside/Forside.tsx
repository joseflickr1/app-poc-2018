import * as React from 'react';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';
import ScheduleIcon from '@material-ui/icons/Schedule';
import StarIcon from '@material-ui/icons/StarHalf';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from 'material-ui/IconButton';
import Navigering from '../navigering/Navigering';
import { RouteComponentProps } from 'react-router';
import * as H from 'history';

const bilde1 = require('./img/spencer-backman-488537-unsplash.png');
const bilde2 = require('./img/etienne-boulanger-265266-unsplash.png');
const style = {
    bookingKnapp: {
        width: '36px',
        height: '36px',
        marginBottom: '10px'

    },
    cardcontent: {paddingBottom: '0'}
};
const StyledHeader = styled.div`
    max-width: 375px;
    text-align: center;
    margin: 0 auto;
    padding: 1rem 1rem 0 1rem;
    svg.logo {
        width: 6rem;
        height: 6rem;
        padding: 31px;
    }
`;

const StyledContent = styled.div`
    max-width: 100%;
    margin: 0 auto;
    padding: 1rem;
        
    @media (min-width: 768px) {
        max-width: 768px;
    }
    
    .ul-liste {
        list-style: none;
        padding: 1rem 0 0 0;
        color: rgba(0, 0, 0, 0.54);
        
        .li-liste {
            padding-top: 0.2rem;
        }
    }
`;

const StyledFooter = styled.div`
    text-align: right;
    max-width: 100%;
    margin: 0 auto;
    padding: 1rem;
        
    @media (min-width: 768px) {
        max-width: 768px;
    }
    
    > p {
        padding: 0;
        margin: 0;
    }

`;

const BookAvtale = (history: H.History) => (
    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <div
            style={{
                top: '-2.5rem',
                right: '1rem',
                position: 'relative',
                cursor: 'pointer'
            }}
            onClick={() => history.push('/booking')}
        >
            <Button
                size="medium"
                style={style.bookingKnapp}
                variant="fab"
                color="secondary"
                aria-label="booking"
            >
                <ScheduleIcon/>
            </Button>
            <Typography variant="caption">BOOK EN AVTALE</Typography>
            <StarIcon style={{fill: '#9E9E9E'}}/>
            <StarIcon style={{fill: '#9E9E9E'}}/>
            <StarIcon style={{fill: '#9E9E9E'}}/>
        </div>
    </div>
);

export default class Forside extends React.Component<RouteComponentProps<{}>> {
    render() {
        return (
            <div>
                <Navigering/>

                <div style={{maxWidth: '375px', margin: '0 auto'}}>
                    <Card style={{margin: '10px 0'}}>
                        <CardMedia
                            style={{
                                height: 0,
                                paddingTop: '56.25%', // 16:9
                            }}
                            image={bilde1}
                            title="Portrett"
                        >
                            {BookAvtale(this.props.history)}
                        </CardMedia>

                        <CardContent style={style.cardcontent}>
                            <Typography variant="subheading" component="h2">
                                Portrett fotografering
                            </Typography>
                            <Typography style={{color: '#9E9E9E'}} component="p">
                                Canon EOS 700D
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <IconButton aria-label="Add to favorites" style={{margin: '0'}}>
                                <FavoriteIcon/>
                            </IconButton>
                        </CardActions>
                    </Card>
                    <Card style={{margin: '10px 0'}}>
                        <CardMedia
                            style={{
                                height: 0,
                                paddingTop: '56.25%', // 16:9
                            }}
                            image={bilde2}
                            title="Familie"
                        >
                            {BookAvtale(this.props.history)}
                        </CardMedia>
                        <CardContent style={style.cardcontent}>
                            <Typography variant="subheading" component="h2">
                                Familie fotografering
                            </Typography>
                            <Typography style={{color: '#9E9E9E'}} component="p">
                                Canon EOS 700D
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton aria-label="Add to favorites" style={{margin: '0'}}>
                                <FavoriteIcon/>
                            </IconButton>
                        </CardActions>
                    </Card>

                    <StyledHeader>
                        <Typography
                            variant="headline"
                            style={{
                                color: 'black'
                            }}
                        >
                            Vi hjelper deg med fotografering
                        </Typography>
                        <p>
                            Vi tilbyr kvalitets fotografering og gode priser til dine behov
                        </p>
                    </StyledHeader>

                </div>
                <StyledContent>
                    <p>
                        Vi er et lite selskap og som er i startfasen. Vi tilbyr kvalitet og profesjonell fotografering
                        til private og bedrifter.
                    </p>
                    <p>
                        Vi har hatt fotografering som en hobby i mange år og har opparbeidet
                        god kunnskap og kompetanse.
                    </p>
                    <p>
                        Vi ønsker nå å tilby denne tjenesten til dere.
                        Vår viktigste oppgave er å gi våre kunder gode opplevelser og tjenester.
                    </p>
                    <ul className="ul-liste">
                        <li className="li-liste">Portrett fotografering</li>
                        <li className="li-liste">Familie fotografering</li>
                        <li className="li-liste">Komersielle oppdrag</li>
                    </ul>
                </StyledContent>
                <StyledFooter>
                    <p>
                        Kontakt oss for mer informasjon
                    </p>
                    <p>
                        info@fotohjelp.no
                    </p>
                </StyledFooter>
            </div>
        );
    }
}