import { Link } from "@nextui-org/link";

import { Head } from "./head";
import Navbar from "@/components/onboard/navbar";

export default function OnboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex bg-white flex-col gap-8 ">
      <Head />
      <Navbar />
      <main className="px-4 sm:px-0 self-center w-[100%] sm:w-[480px]">
        {children}
      </main>
    </div>
  );
}
