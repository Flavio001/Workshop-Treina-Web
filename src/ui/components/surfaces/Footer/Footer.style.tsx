import { Container } from "@material-ui/core";
import { experimentalStyled as styled } from "@material-ui/core/styles";

export const FooterStyled = styled("footer")`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) =>
    theme.palette.getContrastText(theme.palette.primary.main)};
  padding: ${({ theme }) => theme.spacing(4)} 0;
  margin-top: auto;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;

export const FooterTitle = styled("h4")`
  font-weight: bold;
  margin-top: 16px;
`;

export const FooterText = styled("p")`
  text-align: justify;
`;

export const AppList = styled("ul")`
  display: flex;
  list-style-type: none;
  padding: 0;

  img {
    width: 122px;
    margin: 8px;
  }
`;
