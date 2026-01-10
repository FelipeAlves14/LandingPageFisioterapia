import type { ReactNode } from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import { FaCircleCheck, FaLightbulb, FaLocationDot } from "react-icons/fa6";
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import Carousel from "./components/Carousel";
import fisioFoto from "./assets/fisio-foto.png";
import formacoesImagem from "./assets/formacoes.png";
import fundoDireita from "./assets/fundo-direita.png";
import fundoEsquerda from "./assets/fundo-esquerda.png";
import fundoRodape from "./assets/fundo-rodape.png";
import marca from "./assets/marca.png";

function App() {
  interface BeneficioMulligan {
    titulo: string;
    conteudo: string;
  }

  interface Localizacao {
    cidade: string;
    locais: string[];
  }

  const beneficiosMulligan: BeneficioMulligan[] = [
    {
      titulo: "Alivia da dor",
      conteudo:
        "Ajuda a reduzir a dor em articulações e músculos afetados. Os movimentos são realizados para minimizar ou eliminar a dor durante o tratamento.",
    },
    {
      titulo: "Melhoria a mobilidade",
      conteudo:
        "Melhora a amplitude de movimento de uma articulação. Muito útil para pessoas com rigidez articular ou limitações de movimento.",
    },
    {
      titulo: "Abordagem não invasiva",
      conteudo: "Abordagem não cirúrgica e não medicamentosa.",
    },
  ];
  const formacoes: string[] = [
    "Bacharel em Fisioterapia",
    "Pós Graduando em Atividade Física e Saúde",
    "Pós Graduando em Fisiologia do Exercício e Treinamento Desportivo",
    "Formado em Conceito Mulligan",
    "Formação no tratamento completo de hérnias de disco cervical e lombar",
    "Instrutor de Pilates",
    "Quiropraxista",
  ];
  const localizacoes: Localizacao[] = [
    {
      cidade: "Natal",
      locais: [
        "Fusion Clinic - Rua da Saudade, 762, Lagoa Nova",
        "Angá - Rua Walter Duarte Pereira, 1664, Capim Macio",
        "Griffe Point - Rua Conselheiro Morton Farias, 1448, Lagoa Nova",
        "Espaço Dra. Talita Medeiros - Rua Tarauca, 545, Potengi",
      ],
    },
    {
      cidade: "Parnamirim",
      locais: [
        "Integrare - Av. Maria Lacerda Montenegro, 2184, Nova Parnamirim",
        "Home Detox - Av. Maria Lacerda Montenegro, 2826, Nova Parnamirim",
        "Casuar - Rua das Flôres, 694, Nova Parnamirim",
        "Elleva - Av. Ten. Medeiros, 810, Centro",
      ],
    },
    {
      cidade: "São Gonçalo do Amarante",
      locais: ["Espaço Miss - Av. Flores Silvestres, Embaixo da Workfit"],
    },
  ];

  return (
    <>
      <Header />
      <div className="md:mx-28 mx-4 sm:mx-8">
        <div className="flex flex-col gap-8 justify-evenly md:flex-row md:gap-0">
          <div className="md:w-auto w-full">
            <h1 className="font-bold md:text-8xl not-sm:text-center sm:text-6xl text-4xl text-(--golden) w-full">
              Marque seu atendimento
            </h1>
            <div className="h-16 mt-4 md:pr-80 overflow-hidden w-full">
              <div className="border-8 border-(--golden) h-96 rounded-t-full w-full"></div>
            </div>
            <p className="mt-12 sm:text-lg text-(--golden) text-base">
              Sou Walterclay Abreu de Silva Júnior
            </p>
            <div className="mt-8 not-sm:text-center sm:mt-28">
              <Button contact />
            </div>
          </div>
          <img
            src={fisioFoto}
            alt="Foto do fisioterapeuta"
            className="max-w-sm md:max-w-none md:w-auto w-full"
          />
        </div>
        <div>
          <h1 className="font-bold mb-8 sm:mb-14 sm:text-4xl text-center text-2xl text-(--golden)">
            Entre em contato pelas minhas redes sociais
          </h1>
          <div className="flex flex-col gap-4 items-center justify-center sm:flex-row sm:gap-8">
            <Button
              anchor="https://instagram.com/walterclay.fisio"
              className="sm:text-3xl text-(--media-color) text-xl underline"
            >
              <SiInstagram className="inline mr-2" />
              Instagram
            </Button>
            <Button className="sm:text-3xl text-(--media-color) text-xl underline">
              <SiWhatsapp className="inline mr-2" />
              Whatsapp
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-between md:flex-row md:gap-0 mt-16 sm:mt-28">
          <div id="formacoes" className="md:w-auto w-full">
            <h1 className="font-bold sm:text-5xl text-3xl text-(--golden) w-full">
              Minhas Formações e Experiências
            </h1>
            <ul className="mt-10 sm:mt-20 text-(--golden)">
              {formacoes.map<ReactNode>((formacao: string) => (
                <li key={formacao} className="flex gap-5 mt-4 sm:mt-7">
                  <FaCircleCheck className="inline mr-2 shrink-0 sm:text-3xl text-2xl text-(--golden-icon)" />
                  <p className="font-semibold sm:text-2xl text-base">
                    {formacao}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={formacoesImagem}
            alt="Formações e Experiências"
            className="max-w-sm md:max-w-none md:w-auto w-full"
          />
        </div>
      </div>
      <div className="bg-(--bg-mulligan)">
        <div className="flex flex-col gap-8 justify-between md:flex-row md:gap-0 md:px-32 mt-14 px-4 py-8 sm:px-8 sm:py-16">
          <div className="md:w-auto w-full">
            <h1 className="font-semibold sm:text-5xl text-3xl text-(--golden) w-full">
              Conceito Mulligan
            </h1>
            <p className="mt-8 sm:mt-24 sm:text-[16px] text-sm text-(--option-color)">
              O Conceito Mulligan é uma abordagem terapêutica utilizada por
              fisioterapeutas e outros profissionais de saúde para tratar
              problemas musculoesqueléticos, como dores articulares e
              musculares.
            </p>
          </div>
          <div className="md:w-auto w-full">
            {beneficiosMulligan.map<ReactNode>(
              ({ titulo, conteudo }: BeneficioMulligan) => (
                <>
                  <h1 className="font-bold mt-4 sm:text-3xl text-2xl text-(--golden)">
                    {titulo}
                  </h1>
                  <p className="mt-2.5 sm:text-[18px] text-sm text-(--option-color)">
                    {conteudo}
                  </p>
                </>
              )
            )}
          </div>
        </div>
      </div>
      <div className="mt-16 px-4 sm:mt-32 text-center" id="servicos">
        <h1 className="font-bold sm:text-5xl text-3xl text-(--golden)">
          Conheça meus serviços
        </h1>
        <p className="font-bold mt-6 sm:mt-10 sm:text-[18px] text-sm text-(--option-color)">
          A maior variedade de serviços fisioterapêuticos para você.
        </p>
        <Carousel />
      </div>
      <div
        className="mt-16 px-4 sm:mt-28"
        id="localizacoes"
      >
        <div className="flex flex-col gap-4 items-start justify-between md:mx-28 mx-0 sm:flex-row sm:gap-0 sm:items-end sm:mx-8">
          <div className="flex flex-col gap-2 items-start sm:flex-row sm:gap-5 sm:items-end">
            <h1 className="font-bold sm:text-5xl text-3xl text-(--golden)">
              Onde estou atendendo
            </h1>
            <p className="flex sm:text-[18px] text-(--option-color) text-sm">
              <FaLightbulb className="mr-2 shrink-0 text-(--golden-icon)" />{" "}
              Além de atender em domicílio
            </p>
          </div>
          <Button contact />
        </div>
        <div className="flex mt-8 relative sm:mt-0 text-(--golden)">
          <div className="absolute hidden right-0 sm:block -bottom-20">
            <img src={fundoDireita} alt="fundo-rodape" className="block" />
          </div>
          <div className="absolute hidden left-0 sm:block -bottom-100">
            <img src={fundoEsquerda} alt="fundo-rodape" className="block" />
          </div>
          <div className="flex flex-col gap-8 mx-0 sm:flex-row sm:gap-0 sm:mx-28 w-full">
            {localizacoes.map<ReactNode>(({ cidade, locais }: Localizacao) => (
              <div
                key={cidade}
                className="flex flex-1 flex-col justify-between sm:w-auto w-full"
              >
                <ul className="mt-0 sm:mt-11">
                  {locais.map<ReactNode>((local: string) => (
                    <li
                      key={local}
                      className="flex gap-2.5 mt-2 sm:mt-4 sm:text-[20px] text-sm"
                    >
                      <FaLocationDot className="shrink-0 text-(--golden-icon)" />
                      <p>{local}</p>
                    </li>
                  ))}
                </ul>
                <h2 className="font-semibold mt-6 sm:mt-16 sm:text-3xl text-2xl text-center">
                  {cidade}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-(--bg-footer) mt-24 sm:mt-96 text-(--golden)">
        <div>
          <div className="flex flex-col gap-8 relative sm:flex-row sm:gap-60">
            <div className="mx-4 py-6 sm:mx-14 sm:py-9">
              <img
                src={marca}
                alt="marca gráfica maior"
                className="max-w-[150px] sm:max-w-none"
              />
              <p className="mt-5 sm:text-[18px] text-(--option-color) text-sm text-wrap">
                A maior variedade de serviços fisioterapêuticos para você.
              </p>
            </div>
            <div className="mx-4 my-6 sm:mx-14 sm:my-9 sm:w-auto w-full">
              <h1 className="font-semibold sm:text-5xl text-3xl">
                Entrar em contato
              </h1>
              <p className="flex flex-wrap gap-4 items-center mt-4 sm:mt-6">
                <SiWhatsapp className="shrink-0 sm:text-4xl text-3xl text-(--golden-icon)" />
                <Button className="sm:text-[18px] text-sm text-(--option-color) underline">
                  +55 (84) 92160-4246
                </Button>
              </p>
              <p className="flex flex-wrap gap-4 items-center mt-4 sm:mt-6">
                <SiInstagram className="shrink-0 sm:text-4xl text-3xl text-(--golden-icon)" />
                <Button className="sm:text-[18px] text-sm text-(--option-color) underline">
                  @walterclay.fisio
                </Button>
              </p>
            </div>
            <div className="absolute bottom-0 hidden right-0 sm:block">
              <img src={fundoRodape} alt="fundo-rodape" className="block" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
