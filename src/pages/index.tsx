import { Button } from "@material-ui/core";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import { TextFieldStyled } from "ui/components/inputs/TextField/TextField.style";
import { Typography } from "@material-ui/core";

import UserInformation from "ui/components/user-information/UserInformation";


export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        titulo={"Conheça nossos profissionais"}
        subtitulo={"Contrate um de nossos colaboradores agora"}
      />
      <TextFieldStyled variant={'outlined'} label={'Digite o seu CEP'} fullWidth />

      <Typography color={'error'}>CEP Inválido</Typography>

      <Button variant={'contained'} color={'secondary'} sx={{width: '220px'}}>Buscar</Button>
      
      <UserInformation 
      name={'Akira Hanashiro'}
      picture={'https://github.com/hanashiro.png'}
      rating={3}
      description={'São Paulo'}/>

    </div>
  );
}
