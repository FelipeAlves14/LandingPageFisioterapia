import { useCallback, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Button from "../Button";
import Card from "./components/Card";
import agulhamentoASeco from "../../assets/agulhamento-seco-e-laserterapia.jpeg";
import conceitoMulligan from "../../assets/conceito-mulligan.jpeg";
import drenagemLinfatica from "../../assets/drenagem-linfatica.jpeg";
import fisioterapiaEsportiva from "../../assets/fisioterapia-esportiva.jpeg";
import gerontologia from "../../assets/gerontologia.jpeg";
import liberacaoMiofascial from "../../assets/liberacao-miofascial.jpeg";
import massagemTerapeutica from "../../assets/massagem-terapeutica.jpeg";
import metodoPilates from "../../assets/metodo-pilates.jpeg";
import quiropraxia from "../../assets/quiropraxia.jpeg";
import reabilitacaoOrtopedica from "../../assets/reabilitacao-ortopedica.jpeg";
import reabilitacaoParalisiaFacial from "../../assets/reabilitacao-na-paralisia-facial.jpeg";
import tratamentoLaserterapia from "../../assets/tratamento-de-feridas-com-laserterapia.jpg";

export interface Servico {
  titulo: string;
  descricao: string;
  foto: string;
}

type Direcao = "esquerda" | "direita";

export default function Carousel() {
  const [index, setIndex] = useState<number>(0);
  const [direcao, setDirecao] = useState<Direcao>("direita");
  const servicos: Servico[] = [
    {
      titulo: "Agulhamento a Seco + Laserterapia",
      descricao:
        "Abordagem para alívio de dores musculares e recuperação tecidual profunda.",
      foto: agulhamentoASeco,
    },
    {
      titulo: "Quiropraxia",
      descricao:
        "Tratamento para problemas nas articulações, músculos e na coluna vertebral.",
      foto: quiropraxia,
    },
    {
      titulo: "Liberação Miofascial",
      descricao:
        "Técnica de liberação do corpo através de flexibilização e alongamento dos tecidos.",
      foto: liberacaoMiofascial,
    },
    {
      titulo: "Gerontologia",
      descricao:
        "Estudo do envelhecimento e suas implicações na saúde física e mental.",
      foto: gerontologia,
    },
    {
      titulo: "Conceito Mulligan",
      descricao:
        "Técnica de mobilização articular manual mundialmente reconhecida.",
      foto: conceitoMulligan,
    },
    {
      titulo: "Drenagem Linfática",
      descricao:
        "Técnica de massagem para reduzir inchaços e fortalecer o sistema imunológico.",
      foto: drenagemLinfatica,
    },
    {
      titulo: "Reabilitação na Paralisia Facial",
      descricao:
        "Tratamento de reeducação dos músculos faciais para restaurar a função motora.",
      foto: reabilitacaoParalisiaFacial,
    },
    {
      titulo: "Reabilitação Ortopédica",
      descricao:
        "Tratamento para recuperação da mobilidade e tratamento de lesões.",
      foto: reabilitacaoOrtopedica,
    },
    {
      titulo: "Tratamento de Feridas com Laserterapia",
      descricao:
        "Tratamento para aceleração da cicatrização de feridas complexas.",
      foto: tratamentoLaserterapia,
    },
    {
      titulo: "Fisioterapia Esportiva",
      descricao:
        "Tratamento para potencialização do desempenho esportivo e prevenção de lesões.",
      foto: fisioterapiaEsportiva,
    },
    {
      titulo: "Massagem Terapêutica",
      descricao:
        "Tratamento para relaxamento muscular, melhora da circulação e alívio da tensão.",
      foto: massagemTerapeutica,
    },
    {
      titulo: "Método Pilates",
      descricao:
        "Método de condicionamento físico e mental para fortalecimento muscular.",
      foto: metodoPilates,
    },
  ];

  const mod = useCallback<(dividendo: number) => number>(
    (dividendo) =>
      ((dividendo % servicos.length) + servicos.length) % servicos.length,
    [servicos.length],
  );

  return (
    <div className="flex items-center justify-center md:justify-between mt-8 md:mt-16 gap-4 md:gap-0 px-4">
      <Button
        className="text-2xl md:text-base"
        onClick={() => {
          setDirecao("esquerda");
          setIndex(mod(index - 1));
        }}
      >
        <FaChevronLeft />
      </Button>
      <div
        key={`left-${mod(index - 1)}`}
        className={`hidden md:block ${
          direcao === "direita"
            ? "carousel-side-enter-right"
            : "carousel-side-enter-left"
        }`}
      >
        <Card servico={servicos[mod(index - 1)]} />
      </div>
      <div
        key={`center-${index}`}
        className={
          direcao === "direita" ? "carousel-enter-right" : "carousel-enter-left"
        }
      >
        <Card primal servico={servicos[mod(index)]} />
      </div>
      <div
        key={`right-${mod(index + 1)}`}
        className={`hidden md:block ${
          direcao === "direita"
            ? "carousel-side-enter-right"
            : "carousel-side-enter-left"
        }`}
      >
        <Card servico={servicos[mod(index + 1)]} />
      </div>
      <Button
        className="text-2xl md:text-base"
        onClick={() => {
          setDirecao("direita");
          setIndex(mod(index + 1));
        }}
      >
        <FaChevronRight />
      </Button>
    </div>
  );
}
