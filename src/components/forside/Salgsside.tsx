import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Navigering from '../navigering/Navigering';
import { RouteComponentProps } from 'react-router';
import { primaryContrastText } from '../../assets/jss/material-fotohjelp-react';
import DecoratedButton from '../common/DecoratedButton';

const faceSvg = require('./face3.svg');

const StyledHeader = styled.div`
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
    padding: 1rem 1rem 0 1rem;
    > h1, p {
        margin-bottom: 10px;
    }
    > h1, p {
        color: ${primaryContrastText}
    }
`;

const StyledContent = styled.div`
    max-width: 500px;
    margin: 0 auto;
    padding: 1rem;
    
    > p {
        padding-bottom: 10px;
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
    max-width: 768px;
    margin: 0 auto;
    padding: 1rem;
        
    > p {
        padding: 0;
        margin: 0;
    }

`;

export default class Salgsside extends React.Component<RouteComponentProps<{}>> {
    render() {
        return (
            <div>
                <Navigering/>

                <StyledHeader>
                    <img src={faceSvg} style={{width: '200px', height: '200px'}}/>

                    <Typography
                        variant="display1"
                    >
                        Vi hjelper deg med fotografering
                    </Typography>
                    <Typography
                        variant="body1"
                    >
                        Vi tilbyr kvalitets fotografering og gode priser til dine behov
                    </Typography>

                    <DecoratedButton props={{href: '/booking' }}>
                        Book i dag
                    </DecoratedButton>
                </StyledHeader>

                <StyledContent>
                    <Typography>
                        Vi er et lite team som tilbyr fotografering til alle anledninger.
                    </Typography>
                    <Typography>
                        Vi har hatt fotografering som en hobby i mange år og har opparbeidet
                        god kunnskap og kompetanse.
                    </Typography>
                    <Typography>
                        Vi ønsker nå å tilby denne tjenesten til dere.
                        Vår viktigste oppgave er å gi våre kunder gode opplevelser og tjenester.
                    </Typography>
                    <ul className="ul-liste">
                        <li className="li-liste"><Typography>Portrett fotografering</Typography></li>
                        <li className="li-liste"><Typography>Familie fotografering</Typography></li>
                        <li className="li-liste"><Typography>Komersielle oppdrag</Typography></li>
                    </ul>
                </StyledContent>
                <StyledFooter>
                    <Typography>
                        Kontakt oss for mer informasjon
                    </Typography>
                    <Typography>
                        info@fotohjelp.no
                    </Typography>
                </StyledFooter>
            </div>
        );
    }
}