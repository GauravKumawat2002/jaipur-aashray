import Navbar from "@/components/custom/header/nav-bar";
import { routes } from "../routes";
import Footer from "@/components/custom/footer/footer";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar className="mx-auto max-w-[1440px] px-8 py-4 lg:px-8" />
      <main className="mx-auto min-h-screen max-w-[1440px] py-4 sm:px-6 lg:px-0">
        {children}
      </main>
      <Footer className="mx-auto max-w-[1440px] px-8 py-4 sm:py-6 lg:px-8 lg:py-20" />
    </>
  );
}
