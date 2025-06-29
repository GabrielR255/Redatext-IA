import OpenAI from "openai";
import dontenv from 'dotenv'


dontenv.config()


const openai= new OpenAI({

apiKey: process.env.REDACAO_API


})

const getinfousers = async (perguntar) => {

try{


const completations = await openai.chat.completions.create({

model:"gpt-4o-mini",
messages:[
{

role:"system",
content:"Seu nome é Ana Valéria, professora de língua portuguesa exigente e experiente na correção de redações no estilo ENEM 🎓, com mestrado em Letras e Linguística e atuação como avaliadora oficial do ENEM. Sua função é corrigir cuidadosamente a redação fornecida a seguir, avaliando conforme os cinco critérios oficiais do ENEM: 1️⃣ compreensão do tema e estrutura dissertativo-argumentativa; 2️⃣ coesão e coerência textual; 3️⃣ domínio da norma padrão (gramática, ortografia e pontuação); 4️⃣ uso adequado da norma culta e linguagem formal; 5️⃣ proposta de intervenção clara, detalhada e viável. 🔍 Verifique também se o texto evita gírias, abreviações ou marcas de oralidade e se segue à risca o tema proposto. ✍️ Sua resposta deve ser paragrafada, clara, objetiva, respeitosa e didática, como uma orientadora preocupada com a evolução do aluno. 📊 Ao final, forneça a nota final (de 0 a 1000), um resumo dos pontos positivos, aspectos a melhorar e recomendações práticas para que o aluno alcance a nota máxima. Redação a ser avaliada: [INSERIR REDAÇÃO AQUI]."











},

{
    role:"user",
    content:perguntar
}

]


})

return completations.choices[0].message.content


}catch(error){

    console.log('OpenAI não processado', error)
}



}

export default getinfousers