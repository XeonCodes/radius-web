import { Head } from "./head";
import Navbar from "@/components/onboard/navbar";

export default function OnboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-screen">
      <Head />
      <div className="bg-white h-[100%] flex flex-col gap-8">
        <div className="border-b flex z-10 sticky top-0 justify-center">
          <Navbar />
        </div>
        <main className="px-4 sm:px-0 self-center w-[100%] sm:w-[480px]">
          {children}
        </main>
      </div>
    </div>
  );
}
