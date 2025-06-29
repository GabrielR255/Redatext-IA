import { useState } from "react"
import { Listenmessage } from "../../components/Listenmessage"
import Chatbox from "../../components/Chatbox"
import { api } from "../../../services/service"

export const ChatAPI = () => {
//Criação de mensagens de Bot para User
//Crie um useEffect no campo de adicionar texto com validações que a redação deve ter no mínimo 12 caracteres e no máximo 50
const [loading,setLoading] = useState(false)
const [message, setmessage] = useState([



{



id: 1,
text: 'Olá, tudo bem? 👋 Eu sou a professora Ana Valéria, especialista em correção de redações no estilo ENEM. Estou aqui para te ajudar a evoluir na escrita com comentários claros, sugestões valiosas e uma avaliação completa. ✏️ Vamos começar a correção da sua redação? Envie seu texto quando estiver pronto!',
assistent: 'Valéria'
}


])

const Enviarmensagem = async (message) => {

const Novamensagemuser = {

  id: Date.now(),
  text: message,
  assistent: "user"


}

setmessage(prev => [...prev, Novamensagemuser])
setLoading(true)

try{

  const response = await api(message)
  const NovamessageBot ={
 id: Date.now(),
  text: response,
  assistent: "Valéria"


  }

  setmessage(prev => [...prev, NovamessageBot])


}catch(error){

console.log(error)

} finally{

  setLoading(false)
}

}


return(

<div className="flex flex-col relative  h-full   md:flex-row md:relative md:h-full md:overflow-hidden xl:flex-row xl:relative  xl:h-full xl:overflow-hidden "  >
  <div className=" w-[100%] h-[700px] md:w-[40%] md:h-full xl:h-full xl:w-[40%]  text-black bg-[length:100%_2.25rem] bg-[linear-gradient(to_bottom,white_95%,#d1d5db_95%)] p-2 ">
   <Chatbox Enviarmensagem={Enviarmensagem} desabilitar={loading} />
  </div>
<div className=" p-10 w-[100%] md:w-[65%] xl:w-[65%] bg-gradient-to-r from-[#00163d] via-[rgb(0,15,51)] to-[#002e58]">

  <div className=" bg-amber-50   rounded-2xl h-[580px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100 p-4 ">

    <Listenmessage message={message} loading={loading} />
    
  </div>
  </div>
</div>

)


}