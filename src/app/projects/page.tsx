import type { Metadata } from "next";
import { RedirectTo } from "@/components/RedirectTo";

export const metadata: Metadata = {
  title: "Projects",
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function ProjectsPage() {
  return <RedirectTo href="/#projects" label="View projects" />;
}
