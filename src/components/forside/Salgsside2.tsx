import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import ScheduleIcon from '@material-ui/icons/Schedule';
import StarIcon from '@material-ui/icons/StarHalf';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
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

export default class Salgsside2 extends React.Component<RouteComponentProps<{}>> {
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

                </div>
            </div>
        );
    }
}