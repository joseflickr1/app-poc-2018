import * as React from 'react';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';

const StyledHeader = styled.div`
    width: 100%;
    text-align: center;
    padding: 5rem 0;
    background-color: #ffd249;
    svg {
        width: 6rem;
        height: 6rem;
        padding: 31px;
    }
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" version="1.1" viewBox="0 0 26.458333 26.458334"><g transform="translate(0 -270.54)"><circle cx="9.6818" cy="286.34" r="5.6127" fill="#392525"/><rect x="4.5369" y="273.89" width="10.461" height="5.0514" fill="#392525"/><rect x="1.115" y="271.59" width="24.329" height="24.329" fill="none" stroke="#fff" stroke-width="1.8915"/></g></svg>
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