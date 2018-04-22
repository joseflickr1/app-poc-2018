import * as React from 'react';
import Typography from 'material-ui/Typography';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Navigering from './navigering/Navigering';

const bilde1 = require('../forside/img/spencer-backman-488537-unsplash.png');

const Booking = () => {
    return (
        <div>
            <Navigering/>

            <div style={{maxWidth: '375px', margin: '0 auto'}}>
                <Card>
                    <CardMedia
                        style={{
                            height: 0,
                            paddingTop: '56.25%', // 16:9
                        }}
                        image={bilde1}
                        title="Portrett"
                    />

                    <CardContent>
                        <Typography variant="subheading" component="h2">
                            Portrett fotografering
                        </Typography>
                        <Typography style={{color: '#9E9E9E'}} component="p">
                            Canon EOS 700D
                        </Typography>

                    </CardContent>
                </Card>

            </div>
        </div>
    );
};

export default Booking;
