import ChatHeader from "../ChatHeader";
import ChatInput from "../ChatInput";
import { enviarMensagem } from "../../services/utils";
import MessagesContainer from "../MessagesContainer";
import ChatInputBloqueado from "../ChatInputBloqueado";


export default function ChatContainer(props) {



  return (
    <>
      <ChatHeader src={props.src} idUsuarioConversa={props.idUsuarioConversa} nome={props.nome} idConversa={props.id} />
      <MessagesContainer id={props.id} />
      {props.isBloqueado ? <ChatInputBloqueado nome={props.nome}/> :
        <ChatInput
          value={props.valueInput}
          onChange={props.onChange}
          onClick={() => {

            props.onClick();
            if (props.valueInput !== "") {

              enviarMensagem(props.valueInput, props.id)
            }
          }}
        />
      }
    </>
  );

}
