import type { ReactNode } from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import { FaCircleCheck } from "react-icons/fa6";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

function App() {
  const contato: string =
    "https://wa.me/5584921604246?text=Olá,+gostaria+de+iniciar+um+atendimento!";

  const formacoes: string[] = [
    "Bacharel em Fisioterapia",
    "Pós Graduando em Atividade Física e Saúde",
    "Pós Graduando em Fisiologia do Exercício e Treinamento Desportivo",
    "Formado em Conceito Mulligan",
    "Formação no tratamento completo de hérnias de disco cervical e lombar",
    "Instrutor de Pilates",
    "Quiropraxista",
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
              <div className="w-full h-96 rounded-t-full border-8 border-l-0 border-b-0 border-r-0 border-(--golden)"></div>
            </div>
            <p className="mt-12 text-(--golden) text-lg">
              Sou Walterclay Abreu de Silva Júnior
            </p>
            <div className="mt-28">
              <Button anchor={contato} contact />
            </div>
          </div>
          <img src="/fisio-foto.png" alt="Foto do fisioterapeuta" />
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
            <Button
              anchor="https://wa.me/5584921604246?text=Olá,+gostaria+de+iniciar+um+atendimento!"
              className="text-(--media-color) text-3xl underline"
            >
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
              {formacoes.map(
                (formacao: string): ReactNode => (
                  <li className="mt-7 flex gap-5">
                    <FaCircleCheck className="inline mr-2 text-3xl" />
                    <p className="text-2xl font-semibold">{formacao}</p>
                  </li>
                )
              )}
            </ul>
          </div>
          <img src="/formacoes.png" alt="Formações e Experiências" />
        </div>
      </div>
      <div className="bg-(--bg-mulligan)">
        <div className="mx-28 my-14">
          <div>
            <h1 className="font-semibold text-5xl text-(--golden) w-full">
              Conceito Mulligan
            </h1>
            <p className="mt-24"></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
