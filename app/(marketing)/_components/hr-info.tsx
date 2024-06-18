export default function HrInfo() {
  return (
    <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
      <li className="md:flex-1">
        <div className="flex flex-col space-y-2 border-l-4 border-border py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
          <span className="text-sm font-medium text-primary">Krok 1</span>
          <span className="text-xl font-semibold ">
            Registrace a vyplnění profilu
          </span>
          <span className="mt-2 text-muted-foreground">
            Po registraci si můžete vytvořit svůj profil, kde můžete uvést
            informace o vaší firmě a nabídku práce.
          </span>
        </div>
      </li>

      <li className="md:flex-1">
        <div className="flex flex-col space-y-2 border-l-4 border-border py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
          <span className="text-sm font-medium text-primary">Krok 2</span>
          <span className="text-xl font-semibold ">
            Nalezení vhodných kandidátů
          </span>
          <span className="mt-2 text-muted-foreground">
            Po vytvoření profilu můžete začít procházet seznam uživatelů, kteří
            hledají práci.
          </span>
        </div>
      </li>

      <li className="md:flex-1">
        <div className="flex flex-col space-y-2 border-l-4 border-border py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
          <span className="text-sm font-medium text-primary">Krok 3</span>
          <span className="text-xl font-semibold ">
            Oslovení vhodných kandidátů
          </span>
          <span className="mt-2 text-muted-foreground">
            Pokud jste si ze seznamu vybrali někoho, kdo vás zaujal, můžete s
            ním začít komunikovat.
          </span>
        </div>
      </li>
    </ol>
  );
}
