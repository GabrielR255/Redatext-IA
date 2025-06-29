import getinfousers from "../service/services.js";


export const putinforusers = async (req,res) =>{

try{

const {perguntar} = req.body

if(!perguntar){

    return res.status(400).json({
        message: 'Você precisa adicionar o seu texto de redação com no mínimo 7 caracteres e no máximo 50 linhas', pergunta
    })

}

const resposta = await getinfousers (perguntar)

res.json({resposta})

}catch(error){

return res.status(500).json({message: 'Algum erro ocorreu no servidor', error})

}


}