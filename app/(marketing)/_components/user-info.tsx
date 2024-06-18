export default function UserInfo() {
  return (
    <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
      <li className="md:flex-1">
        <div className="flex flex-col space-y-2 border-l-4 border-border py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
          <span className="text-sm font-medium text-primary">Krok 1</span>
          <span className="text-xl font-semibold ">Uživatelský profil</span>
          <span className="mt-2 text-muted-foreground">
            Po registraci si můžete vytvořit svůj profil, kde můžete uvést své
            zkušenosti, dovednosti a portfolio.
          </span>
        </div>
      </li>

      <li className="md:flex-1">
        <div className="flex flex-col space-y-2 border-l-4 border-border py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
          <span className="text-sm font-medium text-primary">Krok 2</span>
          <span className="text-xl font-semibold ">
            Čekání na oslovení od zaměstnavatelů
          </span>
          <span className="mt-2 text-muted-foreground">
            Po vytvoření profilu budete čekat na oslovení od zaměstnavatelů,
            kteří hledají právě někoho jako jste vy.
          </span>
        </div>
      </li>

      <li className="md:flex-1">
        <div className="flex flex-col space-y-2 border-l-4 border-border py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
          <span className="text-sm font-medium text-primary">Krok 3</span>
          <span className="text-xl font-semibold ">
            Začátek komunikace s potenciálním zaměstnavatelem
          </span>
          <span className="mt-2 text-muted-foreground">
            Pokud vás někdo osloví, můžete s ním začít komunikovat a domluvit si
            schůzku.
          </span>
        </div>
      </li>
    </ol>
  );
}
