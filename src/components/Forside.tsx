import * as React from 'react';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';

const StyledHeader = styled.div`
    width: 100%;
    text-align: center;
    padding: 5rem 0;
    background-color: #ffd249;
`;

const StyledContent = styled.div`
    max-width: 400rem;
    margin: 0 25%;
    padding: 2rem 0;
    
    @media (max-width: 768px) {
        max-width: 100%;
        margin: 0 1rem;
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
    max-width: 400rem;
    margin: 0 25%;
    text-align: right;
    
    > p {
        padding: 0;
        margin: 0;
    }
    
    @media (max-width: 768px) {
        max-width: 100%;
        margin: 0 1rem;
    }
`;

export default class Forside extends React.Component {
    render() {
        return (
            <div>
                <StyledHeader>
                    <Typography type="display1">Vi hjelper deg med fotografering</Typography>
                    <p>
                        Vi tilbyr kvalitets fotografering og gode priser til dine behov
                    </p>
                </StyledHeader>
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