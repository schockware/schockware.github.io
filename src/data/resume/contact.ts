export interface ContactInfo {
  name: string;
  region: string;
  email: string;
  links: string[];
}

// Public-facing contact block for the resume/CV headers. Per this site's
// PII policy, only name + region + email + public profile URLs may ever
// appear here -- no phone, no street/city-level address.
export const contact: ContactInfo = {
  name: "Steven Chock",
  region: "US Mountain",
  email: "steven.chock@outlook.com",
  links: [
    "https://www.linkedin.com/in/steven-chock-6336698/",
    "https://github.com/schockware",
    "https://schockware.github.io",
  ],
};
