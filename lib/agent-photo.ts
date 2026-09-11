/**
 * Canonical Dr. Jan Duffy headshot assets (POSE2 studio portrait).
 * Use these paths for every agent photo application sitewide.
 */

export const AGENT_PHOTO = {
  /** Primary square headshot — preferred for next/image */
  src: "/images/dr-jan-duffy.jpg",
  webp: "/images/dr-jan-duffy.webp",
  headshot: "/images/dr-jan-duffy-headshot.jpg",
  headshotPng: "/images/dr-jan-duffy-headshot.png",
  full: "/images/dr-jan-duffy-full.jpg",
  /** Legacy path kept in sync for older references */
  legacy: "/Image/agent1.jpg",
  alt: "Dr. Jan Duffy, REALTOR® — Berkshire Hathaway HomeServices Nevada Properties",
  name: "Dr. Jan Duffy",
  title: "REALTOR® | Berkshire Hathaway HomeServices Nevada Properties",
  license: "S.0197614.LLC",
} as const;

export type AgentPhotoVariant = "avatar" | "card" | "hero" | "badge";
