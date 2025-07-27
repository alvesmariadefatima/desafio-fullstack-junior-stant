import { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqList = [
    {
      question: "Pizza é bom?",
      answer: "Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. In viverra velit.",
    },
    {
      question: "Vende pizza?",
      answer: "Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. In viverra velit.",
    },
    {
      question: "Tem pizza de calabresa?",
      answer: "Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. In viverra velit.",
    },
    {
      question: "Tem delivery?",
      answer: "Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. In viverra velit.",
    },
    {
      question: "Entrega de bike?",
      answer: "Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. In viverra velit.",
    },
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <section id="faq" className="max-w-6xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-stretch gap-6">
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:h-full justify-start">
          <p className="text-orange-400 font-bold uppercase">FAQ</p>

          <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
            Tire todas as suas dúvidas sobre nosso processo de produção!
          </h2>

          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur.{" "}
            <span className="text-orange-400 font-bold">Etiam pellentesque</span>{" "}
            gravida eu egestas sed quis donec ipsum eu. In viverra velit.
          </p>

          <div className="flex flex-col gap-4">
            {faqList.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div key={index} className="border border-gray-300 rounded-md">
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 hover:bg-gray-100 focus:outline-none"
                  >
                    <span>{item.question}</span>
                    <span className="ml-4 w-6 h-6 flex items-center justify-center">
                      {isActive ? (
                        <img
                          src="src/assets/minus-circle.png"
                          alt="Ícone do botão menos"
                        />
                      ) : (
                        <img
                          src="src/assets/plus-circle.png"
                          alt="Ícone do botão mais"
                        />
                      )}
                    </span>
                  </button>

                  {isActive && (
                    <div className="px-4 pb-4 text-gray-600 text-sm">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-end items-start">
          <img
            src="src/assets/Multipizza desktop.png"
            alt="Foto com várias fatias de pizza (Versão desktop)"
            className="hidden md:block h-full object-cover rounded"
          />

          <img
            src="src/assets/Multipizza mobile.png"
            alt="Fotos com várias fatias de pizza (Versão mobile)"
            className="block md:hidden w-full max-w-sm mb-6"
          />
        </div>
      </section>

      <section className="border border-gray-300 rounded px-6 py-6 max-w-6xl mx-auto mt-8">
        <h1 className="text-center text-lg font-semibold mb-2">Ainda tem dúvidas sobre Pizza?</h1>
        <p className="text-center text-gray-600">Entre em contato direto com nossos atendentes.</p>

        <div className="flex justify-center mt-6">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-300 flex items-center gap-2">
            <img
              src="src/assets/logotipo-whatsapp-branco.png"
              alt="Logotipo Whatsapp branco"
              className="w-5 h-5"
            />
            Entrar em contato
          </button>
        </div>
      </section>
    </>
  );
};

export default FAQSection;