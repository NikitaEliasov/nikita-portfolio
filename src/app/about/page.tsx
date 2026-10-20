import type { Metadata } from "next";
import { RedirectTo } from "@/components/RedirectTo";

export const metadata: Metadata = {
  title: "About",
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function AboutPage() {
  return <RedirectTo href="/#about" label="Read about Nikita" />;
}
