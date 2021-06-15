import { Button, Typography, Container} from "@material-ui/core";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import { TextFieldStyled } from "ui/components/inputs/TextField/TextField.style";
import UserInformation from "ui/components/user-information/UserInformation";
import TextFieldMask from "ui/components/inputs/TextField/TextFieldMask/TextFieldMask";
import { FormatElementsContainer, ProfissionaisContainer, ProfissionaisPaper } from "@styles/pages/index.style";


export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        titulo={"Conheça nossos profissionais"}
        subtitulo={"Contrate um de nossos colaboradores agora"}
      />

      <Container>
        <FormatElementsContainer>
          <Typography> Digite o seu CPF: </Typography>

          <TextFieldMask mask={"99.99.99.99"} variant={"outlined"} fullWidth />

          <Typography color={"error"}>CEP Inválido</Typography>

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormatElementsContainer>

        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              name={"Akira Hanashiro"}
              picture={"https://github.com/hanashiro.png"}
              rating={3}
              description={"São Paulo"}
            />
            <UserInformation
              name={"Akira Hanashiro"}
              picture={"https://github.com/hanashiro.png"}
              rating={3}
              description={"São Paulo"}
            />
            <UserInformation
              name={"Akira Hanashiro"}
              picture={"https://github.com/hanashiro.png"}
              rating={3}
              description={"São Paulo"}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
}
