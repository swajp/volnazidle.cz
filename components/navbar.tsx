import Link from "next/link";
import MaxWidthWrapper from "./max-width-wrapper";
import { Button, buttonVariants } from "./ui/button";
import { ArrowRightIcon, SparkleIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

export default async function Navbar() {
  return (
    <nav className="sticky z-[100] inset-x-0 top-0 w-full border-b border bg-background/60 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-[4.3rem] items-center justify-between ">
          <Link href="/" className="flex z-40 text-xl font-bold">
            volná<span className="text-primary">židle.cz</span>
          </Link>
          <div className="h-full flex items-center space-x-4">
            <>
              <SignedIn>
                <SignOutButton>
                  <Button size="sm" variant="ghost">
                    Odhlásit se
                  </Button>
                </SignOutButton>
                <Link
                  href="/profil"
                  className={buttonVariants({
                    size: "sm",
                    className: "flex items-center gap-1",
                  })}
                >
                  Můj profil
                </Link>
              </SignedIn>
              <SignedOut>
                <Link
                  href="/api/auth/login"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Přihlásit se
                </Link>
                <SignInButton mode="modal">
                  <Button className="font-semibold flex items-center">
                    Přidat se
                    <ArrowRightIcon className="ml-1.5 h-5 w-5" />
                  </Button>
                </SignInButton>
              </SignedOut>
              <ModeToggle />
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
