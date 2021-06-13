import { experimentalStyled as styled } from "@material-ui/core/styles";

export const SafeEnvironmentContainer = styled('div')`
    color: ${({theme}) => theme.palette.text.secondary};
    background-color: ${({theme}) => theme.palette.background.default};
    text-align: right;
    padding: 16px 0;
    font-size: 12px;


`