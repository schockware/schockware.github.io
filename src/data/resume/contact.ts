export interface ContactInfo {
  name: string;
  region: string;
  email: string;
}

// Public-facing contact block for the resume/CV headers. Per this site's
// PII policy, only name + region + email may ever appear here -- no phone,
// no street/city-level address. See design/ARCHITECTURE.md.
export const contact: ContactInfo = {
  name: "Steven Chock",
  region: "US Mountain",
  email: "steven.chock@outlook.com",
};
