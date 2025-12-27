import type { Servico } from "..";

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
      className={`bg-${primal ? "(--golden)" : "black"} flex flex-col h-[6${
        primal ? 8 : 4
      }4px] items-center ${
        primal ? "justify-between" : "p-5"
      } rounded-3xl w-96`}
    >
      <div className={`px-10 py-5 text-${primal ? "black" : "(--golden)"}`}>
        <h2 className="font-semibold text-2xl">{titulo}</h2>
        <p className={`text-${primal ? "" : "(--option-color)"}`}>
          {descricao}
        </p>
        <p className="text-5xl">
          <span className="align-text-top text-[18px]">R$</span>
          {preco}
        </p>
      </div>
      <img
        className={primal ? "rounded-t-full" : ""}
        alt="Imagem do serviço prestado"
        src="./formacoes.png"
      />
    </div>
  );
}
