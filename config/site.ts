export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Radius",
  description: "Meeting your everyday payment solution needs",

  pathLinks: {
    landingPage: "/",
    dashboardHome: "/dashboard",
    dashboardProfile: "/dashboard/profile",
    signin: "/signin",
    register: "/register",
    registerOthers: "/register/others",
  },

  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },

  styleSizes: {
    navPadding: "",
  },
};
