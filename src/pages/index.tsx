import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import UserInformation from "ui/components/user-information/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        titulo={"Conheça nossos profissionais"}
        subtitulo={"Contrate um de nossos colaboradores agora"}
      />
      <UserInformation 
      name={'Akira Hanashiro'}
      picture={'https://github.com/hanashiro.png'}
      rating={3}
      description={'São Paulo'}/>

    </div>
  );
}
