import HeaderText from "@/components/onboard/header";
import OnboardLayout from "@/layouts/onboard";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function RegisterPage() {
  return (
    <OnboardLayout>
      <section className="flex flex-col gap-10">
        <HeaderText
          action={() => console.log("ksncks")}
          title={`Create your ${siteConfig.name} account`}
          subtitle="Already have an account?"
          actionText="Log in"
          path="signin"
        />

        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">
              <p className="label1">Your email</p>
            </label>
            <input
              type="email"
              className="input1 bg-white"
              id="email"
              // required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="phone_number">
              <p className="label1">Your phone number</p>
            </label>
            <input
              type="tel"
              className="input1 bg-white"
              id="phone_number"
              // required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password">
              <p className="label1">Your password</p>
            </label>
            <input
              type="password"
              className="input1 bg-white"
              id="password"
              // required
            />
          </div>

          <div className="flex flex-col gap-3">
            <button className="main-btn mt-1">Next</button>
            <Link href={`${siteConfig.pathLinks.dashboardHome}`}>
              <p className="text-black font-semibold underline underline-offset-4">
                Having trouble?
              </p>
            </Link>
          </div>
        </form>
      </section>
    </OnboardLayout>
  );
}
