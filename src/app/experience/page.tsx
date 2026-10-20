import type { Metadata } from "next";
import { RedirectTo } from "@/components/RedirectTo";

export const metadata: Metadata = {
  title: "Experience",
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function ExperiencePage() {
  return <RedirectTo href="/#experience" label="View experience" />;
}
