
import { Footer, H1Title, H2Title, H3Title, H4Title, H5Title, H6Title } from "design-system-ticket-sports";
import "./styles.scss"

export default function Home() {
  return (
    <div className="apresentacao">
      <H1Title text={"Esse é Destaque 40px"} />
      <H2Title text={"Titulos 32px"}/>
      <H3Title text={"Subtítulos 24px"}/>
      <H4Title text={"Botões de destaque 18px"}/>
      <H5Title text={"Texto destaque, leitura e botões 16px"}/>
      <H6Title text={"Subtexto, menu, botões e componentes 14px"}/>
      <Footer text={"asss"} />
    </div>
  );
}
