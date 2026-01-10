import { useCallback, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Button from "../Button";
import Card from "./components/Card";

export interface Servico {
  titulo: string;
  descricao: string;
  preco: string;
}

export default function Carousel() {
  const [index, setIndex] = useState<number>(0);
  const servicos: Servico[] = [
    {
      titulo: "Quiropraxia",
      descricao: "Tratamento para a correção da coluna",
      preco: "0,00",
    },
    {
      titulo: "Reabilitação Ortopédica",
      descricao: "Tratamento de lesões focados na recuperação da mobilidade",
      preco: "8,00",
    },
    {
      titulo: "Laserterapia",
      descricao: "Tratamento de dores e desconfortos através de feixes de luz",
      preco: "16,00",
    },
  ];
  const mod = useCallback<(dividendo: number) => number>(
    (dividendo) =>
      ((dividendo % servicos.length) + servicos.length) % servicos.length,
    [servicos.length]
  );
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-8 md:mt-16 gap-4 md:gap-0 px-4">
      <Button
        className="text-2xl md:text-base"
        onClick={() => {
          setIndex(mod(index - 1));
        }}
      >
        <FaChevronLeft />
      </Button>
      <div className="hidden md:block">
        <Card servico={servicos[mod(index - 1)]} />
      </div>
      <Card primal servico={servicos[mod(index)]} />
      <div className="hidden md:block">
        <Card servico={servicos[mod(index + 1)]} />
      </div>
      <Button
        className="text-2xl md:text-base"
        onClick={() => {
          setIndex(mod(index + 1));
        }}
      >
        <FaChevronRight />
      </Button>
    </div>
  );
}
