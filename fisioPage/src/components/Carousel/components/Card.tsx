import type { Servico } from "..";
import formacoes from "../../../assets/formacoes.png";

interface CardProps {
  primal?: boolean;
  servico: Servico;
}

export default function Card(props: Readonly<CardProps>) {
  const {
    primal = false,
    servico: { descricao, preco, titulo },
  } = props;
  return (
    <div
      className={`bg-${primal ? "(--golden)" : "black"} flex flex-col h-auto md:h-[6${
        primal ? 8 : 4
      }4px] items-center ${
        primal ? "justify-between" : "p-5"
      } rounded-3xl w-full sm:w-96 max-w-sm md:max-w-none`}
    >
      <div className={`px-6 sm:px-10 py-4 sm:py-5 text-${primal ? "black" : "(--golden)"}`}>
        <h2 className="font-semibold text-xl sm:text-2xl">{titulo}</h2>
        <p className={`text-sm sm:text-base text-${primal ? "" : "(--option-color)"}`}>
          {descricao}
        </p>
        <p className="text-3xl sm:text-5xl mt-3">
          <span className="align-text-top text-sm sm:text-[18px]">R$</span>
          {preco}
        </p>
      </div>
      <img
        className={`w-full ${primal ? "rounded-t-full" : ""}`}
        alt="Imagem do serviço prestado"
        src={formacoes}
      />
    </div>
  );
}
