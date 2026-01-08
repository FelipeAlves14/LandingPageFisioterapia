import Button from "./Button";
import fundoMarca from "../assets/fundo-marca.png";
import marca from "../assets/marca.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between sticky">
      <div className={`bg-[url(${fundoMarca})] bg-no-repeat p-4 w-full`}>
        <img alt="Walterclay Abreu" src={marca} />
      </div>
      <div className="flex justify-evenly text-(--option-color) w-full">
        <Button anchor="#formacoes">Formações</Button>
        <Button anchor="#servicos">Serviços</Button>
        <Button anchor="#localizacoes">Localizações</Button>
      </div>
      <div className="text-right w-full">
        <Button contact />
      </div>
    </header>
  );
}
