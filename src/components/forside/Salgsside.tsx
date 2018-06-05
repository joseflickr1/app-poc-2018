import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Navigering from '../navigering/Navigering';
import { RouteComponentProps } from 'react-router';
import { primaryColor, primaryContrastText } from '../../assets/jss/material-fotohjelp-react';

const StyledDivBackground = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
    background-color: ${primaryColor}
    color: ${primaryContrastText}
`;

const StyledHeader = styled.div`
    max-width: 375px;
    text-align: center;
    margin: 0 auto;
    padding: 1rem 1rem 0 1rem;
    > h1 {
        color: ${primaryContrastText}
    }
`;

/*const StyledContent = styled.div`
    max-width: 100%;
    margin: 0 auto;
    padding: 1rem;
        
    @media (min-width: 768px) {
        max-width: 500px;
    }
    
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

`;*/

export default class Salgsside extends React.Component<RouteComponentProps<{}>> {
    render() {
        return (
            <div>
                <StyledDivBackground/>
                <Navigering/>

                <StyledHeader>
                    <Typography
                        variant="display1"
                    >
                        Vi hjelper deg med fotografering
                    </Typography>
                    <Typography
                        variant="headline"
                    >
                        Vi tilbyr kvalitets fotografering og gode priser til dine behov
                    </Typography>
                </StyledHeader>

                {/*<StyledContent>
                    <Typography>
                        Vi er et lite selskap og som er i startfasen. Vi tilbyr kvalitet og profesjonell fotografering
                        til private og bedrifter.
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
                </StyledFooter>*/}
            </div>
        );
    }
}