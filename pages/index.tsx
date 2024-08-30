import { title } from "@/components/primitives";
import { ThemeSwitch } from "@/components/theme-switch";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="text-center">
        <div className="flex flex-col gap-4">
          <h1 className={title()}>Landing Page</h1>
          <div>
            <ThemeSwitch />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
