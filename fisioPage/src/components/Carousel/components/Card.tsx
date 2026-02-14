import type { Servico } from "..";

interface CardProps {
  primal?: boolean;
  servico: Servico;
}

export default function Card(props: Readonly<CardProps>) {
  const {
    primal = false,
    servico: { descricao, foto, titulo },
  } = props;
  return (
    <div
      className={`${primal ? "bg-(--golden)" : "bg-black"} flex flex-col ${primal ? "md:h-[800px]" : "md:h-auto"} items-center ${primal ? "justify-between" : "p-5"} rounded-3xl w-full sm:w-96 max-w-sm md:max-w-none`}
    >
      <div
        className={`px-6 sm:px-10 py-4 sm:py-5 text-${primal ? "black" : "(--golden)"}`}
      >
        <h2 className="font-semibold text-xl sm:text-2xl">{titulo}</h2>
        <p
          className={`text-sm sm:text-base text-${primal ? "" : "(--option-color)"}`}
        >
          {descricao}
        </p>
      </div>
      <img
        className={`${primal ? "w-full" : "w-80"} h-[530px] ${primal ? "rounded-t-full" : ""}`}
        alt="Imagem do serviço prestado"
        src={foto}
      />
    </div>
  );
}
