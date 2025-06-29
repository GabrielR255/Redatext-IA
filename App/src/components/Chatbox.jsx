import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    form: yup
      .string()
      .required("Por favor, escreva sua redação")
      .min(10, "Adicione no mínimo 10 caracteres")
     // Corrigido 65 para 1000
  })
  .required();

const Chatbox = ({ Enviarmensagem, desabilitar }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Redação recebida:", data.form);
    Enviarmensagem(data.form); // Envia a mensagem para o componente pai
    reset(); // Limpa o textarea após envio
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register("form")}
          className="w-full text-sm h-[200px]  md:h-[560px] xl:h-[560px] p-4 resize-none border-none outline-none focus:ring-0 placeholder:text-gray-400 z-20"
          placeholder="Escreva sua redação aqui..."
        ></textarea>

        {errors.form && (
          <span className="text-sm text-red-500">{errors.form.message}</span>
        )}

        <div className="flex justify-center   md:justify-center xl:justify-center">
          <button
            type="submit"
            disabled={desabilitar}
            className="cursor-pointer mt-4 px-6 py-2 bg-gradient-to-r from-[#0174e0] via-[rgb(0,197,247)] to-[#0057a8] rounded text-white "
          >
            Verificar redação

          </button>
        </div>
      </form>
    </div>
  );
};

export default Chatbox;
