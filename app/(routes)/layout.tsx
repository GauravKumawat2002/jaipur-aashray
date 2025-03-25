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
      <Navbar className="mx-auto max-w-[1440px] px-8 py-4 min-[1440px]:px-32" />
      <main className="mx-auto min-h-screen max-w-[1440px] py-4 sm:px-6 lg:px-0 [1440px]:px-32">
        {children}
      </main>
      <Footer className="mx-auto max-w-[1440px] px-8 py-4 sm:py-6 lg:py-20 [1440px]:px-32" />
    </>
  );
}
