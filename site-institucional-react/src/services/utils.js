import { Timestamp, serverTimestamp } from "firebase/firestore";
import db from "./firebase";

export function fromTimestampToFormatDate(timestamp) {

  if (timestamp == null) {
    return "00/00/0000"
  }
  var dataMensagem = new Timestamp(
    timestamp.seconds,
    timestamp.nanoseconds
  ).toDate();

  const dia =
    dataMensagem.getDate() < 10
      ? "0" + dataMensagem.getDate()
      : dataMensagem.getDate();
  const mes =
    dataMensagem.getMonth() < 10
      ? "0" + dataMensagem.getMonth()
      : dataMensagem.getMonth();

  var dataMensagemFormatada =
    dia + "/" + mes + "/" + dataMensagem.getFullYear();

  return dataMensagemFormatada;
}
export function fromDateToFormatDate(dataPassada) {

  var data = new Date(dataPassada);
  const dia = data.getDate() < 10 ? "0" + data.getDate() : data.getDate();
  const mes = data.getMonth() < 10 ? "0" + data.getMonth() : data.getMonth();
  var dataFormatada = dia + "/" + mes + "/" + data.getFullYear();

  return dataFormatada;
}
export function fromTimestampToFormatHour(timestamp) {
  if (timestamp == null) {
    return "00/00/0000"
  }
  var data = new Timestamp(timestamp.seconds, timestamp.nanoseconds).toDate();
  const hora = data.getHours() < 10 ? "0" + data.getHours() : data.getHours();
  const minuto =
    data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes();
  var horaFormatada = hora + ":" + minuto;

  return horaFormatada;
}
export function enviarMensagem(mensagem, id) {
  const idEnviou = Number(sessionStorage.getItem("idUsuario"));
  const texto = mensagem;
  const timestamp = serverTimestamp()
  const msgAdd = {
    idEnviou: idEnviou,
    timestamp: timestamp,
    texto: mensagem,
    lida: false
  }
  db.doc(`chats/${id}`)
    .collection("mensagens")
    .add(msgAdd)
    .then(() => {
      var objDiv = document.getElementById("scroll");
      objDiv.scrollTop = objDiv.scrollHeight;
    });
  db.collection("chats").doc(id).update({
    ultimaMensagem: texto,
    timestamp: timestamp,
  });
}
export function marcarMensagemComoLida(id) {
  db.doc(`chats/${id}`)
    .collection("mensagens")
    .where("idEnviou", "!=", Number(sessionStorage.getItem("idUsuario")))
    .where("lida", "==", false)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        doc.ref.update({
          lida: true,
        });
      });
    });
}
export function denunciarUsuario(objetoDenuncia) {
  var idConversa = objetoDenuncia.idConversa
  delete objetoDenuncia.idConversa
  const timestamp = serverTimestamp()
  objetoDenuncia.timestamp = timestamp;

  db.doc(`chats/${idConversa}`).collection("denuncia").add(
    objetoDenuncia
  ).then(() => {
    db.doc(`chats/${idConversa}`).update({
      bloqueado: true,
      timestamp: timestamp,
      ultimaMensagem: "Chat bloqueado!"
    }).then(() => {
      alert("Denuncia salva!")
      window.location.reload()
    })
  }).catch(e => {
    console.log(e)
  })
}

