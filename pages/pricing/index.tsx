import { title } from "@/components/primitives";
import OnboardLayout from "@/layouts/onboard";

export default function IndexPage() {
  return (
    <OnboardLayout>
      <section className="text-center">
        <div>
          <h1 className={title()}>Pricing In Page</h1>
        </div>
      </section>
    </OnboardLayout>
  );
}
