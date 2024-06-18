import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HrInfo from "./_components/hr-info";
import UserInfo from "./_components/user-info";
import { SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <>
      <SignedOut>
        <MaxWidthWrapper className="mb-20 mt-24 sm:mt-40 flex flex-col items-center justify-center text-center">
          <h1 className="max-w-5xl text-5xl font-bold md:text-6xl lg:text-7xl">
            Potřebujete obsadit{" "}
            <span className="text-primary">volnou židli</span> u vás v kanclu?
          </h1>
          <p className="mt-5 max-w-prose text-muted-foreground sm:text-lg">
            Portál, který vám pomůže najít nového kolegu do vašeho týmu nebo si
            na nějakou dobu půjčit zkušeného odborníka.
          </p>

          <Link
            className={buttonVariants({ className: "mt-5" })}
            href={"/dashboard"}
            target="_blank"
          >
            Seznam programátorů
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </MaxWidthWrapper>

        <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="mt-2 font-bold text-4xl text-primary-foreground sm:text-5xl">
                Jak to funguje?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Naše platforma je rozdělena na dvě části, které se liší podle
                toho, zda jste zaměstnavatel nebo uchazeč o práci.
              </p>
            </div>
          </div>

          <Tabs defaultValue="hr">
            <TabsList className=" px-4 w-fit flex mx-auto">
              <TabsTrigger value="hr">HR pohled</TabsTrigger>
              <TabsTrigger value="user">Uživatelský pohled</TabsTrigger>
            </TabsList>
            <TabsContent value="hr">
              <HrInfo />
            </TabsContent>
            <TabsContent value="user">
              <UserInfo />
            </TabsContent>
          </Tabs>
        </div>
      </SignedOut>
      <SignedIn>
        <MaxWidthWrapper className="mb-20 mt-24 sm:mt-40 flex flex-col items-center justify-center text-center">
          <h1 className="max-w-5xl text-3xl font-bold md:text-4xl lg:text-5xl">
            Momentálně jste na <span className="text-primary">waitlistu</span>.
          </h1>
          <p className="mt-5 max-w-prose text-muted-foreground sm:text-lg">
            Děkujeme za registraci. Jakmile na vás přijde řada, budete mít
            přístup k celé aplikaci.
          </p>
          <SignOutButton>
            <Button className="mt-5">
              Odhlásit se
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </SignOutButton>
        </MaxWidthWrapper>
      </SignedIn>
    </>
  );
}
