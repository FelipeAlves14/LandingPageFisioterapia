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

interface BeneficioMulligan {
  titulo: string;
  conteudo: string;
}

interface Localizacao {
  cidade: string;
  locais: string[];
}

function App() {
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
      <div className="mx-28">
        <div className="flex justify-evenly">
          <div>
            <h1 className="font-bold text-8xl text-(--golden) w-full">
              Marque seu atendimento
            </h1>
            <div className="w-full mt-4 pr-80 h-16 overflow-hidden">
              <div className="w-full h-96 rounded-t-full border-8 border-(--golden)"></div>
            </div>
            <p className="mt-12 text-(--golden) text-lg">
              Sou Walterclay Abreu de Silva Júnior
            </p>
            <div className="mt-28">
              <Button contact />
            </div>
          </div>
          <img src={fisioFoto} alt="Foto do fisioterapeuta" />
        </div>
        <div>
          <h1 className="font-bold mb-14 text-center text-4xl text-(--golden)">
            Entre em contato pelas minhas redes sociais
          </h1>
          <div className="flex justify-center gap-8">
            <Button
              anchor="https://instagram.com/walterclay.fisio"
              className="text-(--media-color) text-3xl underline"
            >
              <SiInstagram className="inline mr-2" />
              Instagram
            </Button>
            <Button className="text-(--media-color) text-3xl underline">
              <SiWhatsapp className="inline mr-2" />
              Whatsapp
            </Button>
          </div>
        </div>
        <div className="flex justify-between mt-28">
          <div id="formacoes">
            <h1 className="font-bold text-5xl text-(--golden) w-full">
              Minhas Formações e Experiências
            </h1>
            <ul className="mt-20 text-(--golden)">
              {formacoes.map<ReactNode>((formacao: string) => (
                <li key={formacao} className="mt-7 flex gap-5">
                  <FaCircleCheck className="inline mr-2 text-3xl text-(--golden-icon)" />
                  <p className="text-2xl font-semibold">{formacao}</p>
                </li>
              ))}
            </ul>
          </div>
          <img src={formacoesImagem} alt="Formações e Experiências" />
        </div>
      </div>
      <div className="bg-(--bg-mulligan)">
        <div className="flex justify-between mt-14 px-32 py-16">
          <div>
            <h1 className="font-semibold text-5xl text-(--golden) w-full">
              Conceito Mulligan
            </h1>
            <p className="mt-24 text-[16px] text-(--option-color)">
              O Conceito Mulligan é uma abordagem terapêutica utilizada por
              fisioterapeutas e outros profissionais de saúde para tratar
              problemas musculoesqueléticos, como dores articulares e
              musculares.
            </p>
          </div>
          <div>
            {beneficiosMulligan.map<ReactNode>(
              ({ titulo, conteudo }: BeneficioMulligan) => (
                <>
                  <h1 className="font-bold mt-4 text-3xl text-(--golden)">
                    {titulo}
                  </h1>
                  <p className="mt-2.5 text-[18px] text-(--option-color)">
                    {conteudo}
                  </p>
                </>
              )
            )}
          </div>
        </div>
      </div>
      <div className="text-center mt-32" id="servicos">
        <h1 className="font-bold text-5xl text-(--golden)">
          Conheça meus serviços
        </h1>
        <p className="font-bold mt-10 text-[18px] text-(--option-color)">
          A maior variedade de serviços fisioterapêuticos para você.
        </p>
        <Carousel />
      </div>
      <div className="mt-28" id="localizacoes">
        <div className="mx-28 flex justify-between">
          <div className="flex gap-5 items-end">
            <h1 className="font-bold text-5xl text-(--golden)">
              Onde estou atendendo
            </h1>
            <p className="flex text-(--option-color) text-[18px]">
              <FaLightbulb className="text-(--golden-icon)" /> Além de atender
              em domicílio
            </p>
          </div>
          <Button contact />
        </div>
        <div className="relative flex text-(--golden)">
          <div className="absolute right-0 -bottom-20">
            <img src={fundoDireita} alt="fundo-rodape" className="block" />
          </div>
          <div className="absolute left-0 -bottom-100">
            <img src={fundoEsquerda} alt="fundo-rodape" className="block" />
          </div>
          <div className="flex mx-28">
            {localizacoes.map<ReactNode>(({ cidade, locais }: Localizacao) => (
              <div key={cidade} className="flex flex-col justify-between">
                <ul className="mt-11">
                  {locais.map<ReactNode>((local: string) => (
                    <li key={local} className="mt-4 flex gap-2.5 text-[20px]">
                      <FaLocationDot className="text-(--golden-icon)" />
                      <p>{local}</p>
                    </li>
                  ))}
                </ul>
                <h2 className="font-semibold mt-16 text-3xl text-center">
                  {cidade}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-(--bg-footer) mt-96 text-(--golden)">
        <div>
          <div className="relative flex gap-60">
            <div className="ml-14 py-9">
              <img src={marca} alt="marca gráfica maior" />
              <p className="mt-5 text-(--option-color) text-[18px]">
                A maior variedade de serviços fisioterapêuticos para você.
              </p>
            </div>
            <div className="mr-14 my-9">
              <h1 className="font-semibold text-5xl">Entrar em contato</h1>
              <p className="flex items-center gap-4 mt-6">
                <SiWhatsapp className="text-4xl text-(--golden-icon)" />
                <Button className="text-[18px] text-(--option-color) underline">
                  +55 (84) 92160-4246
                </Button>
              </p>
              <p className="flex items-center gap-4 mt-6">
                <SiInstagram className="text-4xl text-(--golden-icon)" />
                <Button className="text-[18px] text-(--option-color) underline">
                  @walterclay.fisio
                </Button>
              </p>
            </div>
            <div className="absolute right-0 bottom-0">
              <img src={fundoRodape} alt="fundo-rodape" className="block" />
            </div>
          </div>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default App;
