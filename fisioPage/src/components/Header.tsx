import Button from "./Button";
import marca from "../assets/marca.png";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between sticky gap-4 sm:gap-0">
      <div className="bg-[url(/fundo-marca.png)] bg-no-repeat p-2 sm:p-4 w-full sm:w-auto">
        <img alt="Walterclay Abreu" src={marca} className="max-w-[120px] sm:max-w-none" />
      </div>
      <div className="flex flex-wrap justify-center sm:justify-evenly text-(--option-color) w-full sm:w-full gap-2 sm:gap-0">
        <Button anchor="#formacoes" className="text-xs sm:text-sm md:text-base px-2 sm:px-4 py-1 sm:py-2">Formações</Button>
        <Button anchor="#servicos" className="text-xs sm:text-sm md:text-base px-2 sm:px-4 py-1 sm:py-2">Serviços</Button>
        <Button anchor="#localizacoes" className="text-xs sm:text-sm md:text-base px-2 sm:px-4 py-1 sm:py-2">Localizações</Button>
      </div>
      <div className="flex justify-end not-sm:hidden w-full">
        <Button contact className="px-2 py-1 m-1" />
      </div>
    </header>
  );
}
