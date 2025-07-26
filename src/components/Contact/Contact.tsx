import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormSchema from "../FormSchema/FormSchema";

type FormData = {
  firstName: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(FormSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Dados do formulário:", data);
    alert("Mensagem enviada com sucesso!");
    reset();
  };

  return (
    <section className="px-4 py-10 max-w-xl mx-auto">
      <p className="text-orange-400 font-bold text-center py-5">Entre em contato</p>
      <h1 className="text-2xl text-center md:text-4xl font-extrabold leading-tight">
        Fale com a nossa equipe especializada e adquira nossos serviços
      </h1>

      <p className="text-gray-600 text-center text-sm py-5">
        Lorem ipsum dolor sit amet consectetur. Platea viverra nam vitae convallis. Orci fringilla
        imperdiet malesuada ullamcorper facilisis.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <label className="text-gray-600 font-bold">Primeiro Nome</label>
          <input
            type="text"
            {...register("firstName")}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label className="text-gray-600 font-bold">E-mail</label>
          <input
            type="email"
            {...register("email")}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="text-gray-600 font-bold">Mensagem</label>
          <textarea
            rows={4}
            {...register("message")}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-orange-400 text-white font-semibold py-2 rounded hover:bg-orange-500 transition-colors flex items-center justify-center gap-2"
        >
        <img 
            src="src/assets/send-01.png" 
            alt="Ícone de avião" 
            className="w-5 h-5"
        />
          Enviar mensagem
        </button>
      </form>
    </section>
  );
};

export default Contact;