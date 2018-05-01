import * as React from 'react';
import Typography from 'material-ui/Typography';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Navigering from './navigering/Navigering';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const style = {
    TextField: {
        width: '100%',
    },
    button: {
        marginTop: '1rem'
    }
};

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

                <form>
                    <TextField
                        id="navn"
                        label="Navn"
                        margin="normal"
                        style={style.TextField}
                    />
                    <TextField
                        id="epost"
                        label="E-post"
                        margin="normal"
                        style={style.TextField}
                    />
                    <TextField
                        id="hvemskaltasbildeav"
                        label="Hvem skal tas bilde av"
                        margin="normal"
                        style={style.TextField}
                    />
                    <Button variant="raised" size="medium" color="primary" style={style.button}>
                        Logg inn
                    </Button>
                </form>

            </div>
        </div>
    );
};

export default Booking;
