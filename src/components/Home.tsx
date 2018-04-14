import * as React from 'react';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';

const StyledBlockDiv = styled.div`
    width: 100%;
    text-align: center;
`;

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <StyledBlockDiv>
                    <Typography variant="display3">Velkommen til zwoo</Typography>
                </StyledBlockDiv>
                <StyledBlockDiv>
                    <Button>
                        Logg inn
                    </Button>
                </StyledBlockDiv>
            </div>
        );
    }
}