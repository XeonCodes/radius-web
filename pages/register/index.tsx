import HeaderText from "@/components/onboard/header";
import { title } from "@/components/primitives";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import OnboardLayout from "@/layouts/onboard";
import Link from "next/link";

export default function IndexPage() {
  const nav = () => {};

  return (
    <OnboardLayout>
      <section className="flex flex-col gap-10 mb-20">
        {/* Header Text */}
        <HeaderText
          title="Create your Radius account"
          subtitle="Already have an account?"
          action={nav}
          actionText="Log in"
          path="signin"
        />

        <form className="flex flex-col gap-6">
          {/* Fullname */}
          <div className="flex flex-col gap-1">
            <label htmlFor="fullname">
              <p className="label1">Your fullname</p>
            </label>
            <input
              type="text"
              required
              className="input1 bg-white"
              name=""
              id="fullname"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email">
              <p className="label1">Your email</p>
            </label>
            <input
              type="email"
              required
              className="input1 bg-white"
              name=""
              id="email"
            />
          </div>

          {/* Username */}
          <div className="flex flex-col gap-1">
            <label htmlFor="username">
              <p className="label1">Your username</p>
            </label>
            <input
              type="text"
              required
              className="input1 bg-white"
              name="username"
              id="username"
            />
          </div>

          {/* Phone number */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email">
              <p className="label1">Your phone number</p>
            </label>
            <input
              type="tel"
              required
              className="input1 bg-white"
              name="phone_number"
              id="phone_number"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label htmlFor="password">
              <p className="label1">Your password</p>
            </label>
            <input
              type="password"
              required
              className="input1 bg-white"
              name="password"
              id="password"
            />
          </div>

          {/* Promo Code */}
          <div className="flex flex-col gap-1">
            <label htmlFor="promocode">
              <p className="label1">Promo Code</p>
            </label>
            <input
              type="text"
              className="input1 bg-white"
              name="promocode"
              id="promocode"
            />
          </div>

          <div className="flex flex-col gap-3">
            <button className="main-btn mt-1">Register</button>
            <Link href={`${siteConfig.pathLinks.dashboardHome}`}>
              <p className="text-black font-semibold underline underline-offset-4">
                Forgot password?
              </p>
            </Link>
          </div>
        </form>
      </section>
    </OnboardLayout>
  );
}
