import { siteConfig, socialLinks } from "@/src/content/portfolio";

export const GENERAL_INFO = {
  email: siteConfig.email,
  resume: siteConfig.resume,
};

export const SOCIAL_LINKS = [
  ...socialLinks,
  ...(siteConfig.resume
    ? [
        {
          name: "Resume",
          url: siteConfig.resume,
        },
      ]
    : []),
];
