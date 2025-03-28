import Navbar from "@/components/custom/header/nav-bar";
import Footer from "@/components/custom/footer/footer";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar className="mx-auto max-w-[1600px] px-8 py-4 lg:px-8 2xl:px-0" />
      <main className="mx-auto min-h-screen max-w-[1600px] py-4 sm:px-6 lg:px-0">
        {children}
      </main>
      <Footer className="4xl:px-0 mx-auto max-w-[1600px] px-8 py-4 sm:py-6 lg:px-8 lg:py-20" />
    </>
  );
}
