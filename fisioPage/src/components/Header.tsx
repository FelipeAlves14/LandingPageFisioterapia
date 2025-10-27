import Button from "./Button";

export default function Header() {
  return (
    <header className="flex items-center justify-between sticky">
      <div className="bg-[url(/fundo-marca.png)] bg-no-repeat p-4 w-full">
        <img src="/marca.png" alt="Walterclay Abreu" />
      </div>
      <div className="flex justify-evenly text-(--option-color) w-full">
        <a href="formacoes">Formações</a>
        <a href="servicos">Serviços</a>
        <a href="localizacoes">Localizações</a>
      </div>
      <div className="text-right w-full">
        <Button />
      </div>
    </header>
  );
}
