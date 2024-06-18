import MaxWidthWrapper from "@/components/max-width-wrapper";
import Navbar from "@/components/navbar";
import { SignedOut } from "@clerk/nextjs";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SignedOut>
        <Navbar />
      </SignedOut>
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
    </>
  );
}
