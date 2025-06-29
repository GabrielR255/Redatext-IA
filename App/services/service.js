import axios from "axios";


const API_URL = import.meta.env.VITE_API_URL
export const api = async (pergunta) => {
  try {
    const response = await axios.post(`${API_URL}perguntar`, {
      perguntar: pergunta, // agora usando o mesmo nome do backend
    });

    return response.data.resposta;
  } catch (error) {
    console.log('Erro ao se conectar com o servidor', error);
  }
};
