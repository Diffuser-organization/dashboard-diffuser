import { Sidebar } from "@/components/sidebar";
import { ThemeSwitch } from "@/components/theme-switch";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Sidebar />
      <section className="inline-block max-w-lg text-center justify-center sm:ml-64">
        {children}
      </section>
      <ThemeSwitch className="hidden sm:block fixed top-5 right-5" />
    </div>
  );
}
