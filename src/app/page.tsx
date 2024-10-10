/* eslint-disable @typescript-eslint/no-unused-vars */

import { CardEvent,  H1Title, H2Title, H3Title, H4Title, H5Title, H6Title, Notification, SearchBar } from "design-system-ticket-sports";
import "./styles.scss";
import { useState } from "react";

export default function Home() {

  const countries = ["Brasil", "Estados Unidos", "Canadá", "Japão"];
  return (
    <div className="apresentacao">
      <SearchBar optionSearch={countries} register={"undefined"} />
      <H1Title text={"Esse é Destaque 40px"} />
      <H2Title text={"Titulos 32px"}/>
      <H3Title text={"Subtítulos 24px"}/>
      <H4Title text={"Botões de destaque 18px"}/>
      <H5Title text={"Texto destaque, leitura e botões 16px"}/>
      <H6Title text={"Subtexto, menu, botões e componentes 14px"}/>
      <CardEvent 
      titleEvent={"Corrida pega ladrão"} 
      location={"Suzano"} 
      dateEvent={"15/10/2024"} 
      imageEvent={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR257624bZCEaGXX4nxRBa0UMu2fLGCwapAbQq9Jj3bX5ZP199AW_j4YkWWkbAKP-_iGXY&usqp=CAU"} 
      colorStatus={"positivo"} 
      status={"Inscrições aberta"} />

      <Notification type={"error"} title={"Notificação de erro"} info={"Usado para informar erro"} />
      <Notification type={"orientation"} title={"Notificação de orientação"} info={"Usado para alguma orientação da pagina"} />
      <Notification type={"alert"} title={"Notificação de alerta"} info={"Usado para alerta"} />
      <Notification type={"validation"} title={"Notificação de validação"} info={"Usado para validar"} />
    </div>
  );
}
