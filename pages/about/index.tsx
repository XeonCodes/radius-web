import { title } from "@/components/primitives";
import DashboardLayout from "@/layouts/dashboard";
import OnboardLayout from "@/layouts/onboard";

export default function IndexPage() {
  return (
    <DashboardLayout>
      <section className="text-center">
        <div>
          <h1 className={title()}>About Page</h1>
        </div>
      </section>
    </DashboardLayout>
  );
}
