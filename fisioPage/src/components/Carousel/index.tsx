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
    <div className="flex items-center justify-between mt-16">
      <Button
        onClick={() => {
          setIndex(mod(index - 1));
        }}
      >
        <FaChevronLeft />
      </Button>
      <Card servico={servicos[mod(index - 1)]} />
      <Card primal servico={servicos[mod(index)]} />
      <Card servico={servicos[mod(index + 1)]} />
      <Button
        onClick={() => {
          setIndex((index + 1) % servicos.length);
        }}
      >
        <FaChevronRight />
      </Button>
    </div>
  );
}
