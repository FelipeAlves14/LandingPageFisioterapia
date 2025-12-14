import Button from "./Button";

export default function Header() {
  return (
    <header className="flex items-center justify-between sticky">
      <div className="bg-[url(/fundo-marca.png)] bg-no-repeat p-4 w-full">
        <img alt="Walterclay Abreu" src="/marca.png" />
      </div>
      <div className="flex justify-evenly text-(--option-color) w-full">
        <Button anchor="#formacoes">Formações</Button>
        <Button anchor="#servicos">Serviços</Button>
        <Button anchor="#localizacoes">Localizações</Button>
      </div>
      <div className="text-right w-full">
        <Button
          anchor="https://wa.me/5584921604246?text=Olá,+gostaria+de+iniciar+um+atendimento!"
          contact
        />
      </div>
    </header>
  );
}
